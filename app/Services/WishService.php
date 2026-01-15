<?php

namespace App\Services;

use App\Mail\WishFulfilRequestedMail;
use App\Models\Donation;
use App\Models\File;
use App\Models\Fulfillment;
use App\Models\Organization;
use App\Models\User;
use App\Models\Wish;
use App\Notifications\DeliveryAttemptNotification;
use App\Notifications\IssueReportedNotification;
use App\Notifications\ItemReceivedNotification;
use App\Notifications\TaskClosedNotification;
use App\Notifications\WishFulfilRequestedNotification;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Notification;


class WishService extends BaseService
{
    public function __construct(
        protected Wish $wish,
        protected File $file,
        protected CategoryService $categoryService,
        protected User $user,
        protected Fulfillment $fulfillment
    ){
        $this->model = $this->wish;
    }

    public function getListWithFilter($request)
    {
        $sortColumn = $request->input('sort', 'created_at');
        $sortDirection = $request->input('direction', 'desc');
        $searchName = $request->input('search_name');
        $filterStatus = $request->input('filter_status');
        // Keep query parameters when paginating
        $query = $this->wish->with(['user', 'files', 'featuredImage', 'latestFulfillment', 'latestFulfillment.donation.user']);
        if (checkWisher() or checkDonorWisher()){
            if (Auth::user()->user_type === 'organization'){
                $query->where('created_by', Auth::id());
            }else{
                $query->where('user_id', Auth::id());
            }
        }

        return $query->when($searchName, function ($query, $searchName) {
            $query->where('name', 'like', '%' . $searchName . '%');
        })
            ->when($filterStatus, function ($query, $filterStatus) {
                $query->where('status', $filterStatus);
            })
            ->orderBy($sortColumn, $sortDirection)
            ->paginate(10) // Pagination: 10 items per page
            ->withQueryString();
    }
    public function wishByStatus($status = null, $resource = 'list', $limit = null, $for = 'frontend', $userId = null): Collection|int
    {
        $userId = $userId ?? Auth::id();
        $query = $this->wish->with(['user', 'category', 'files', 'featuredImage'])->orderBy('created_at', 'desc');
        if ($for === 'admin') {
            if (Auth::user()->user_type === 'organization'){
                $query->whereHas('user', function ($user) {
                    $user->where('organization_id', Auth::user()->organization_id);
                });
            }else{
                $query->where('user_id', $userId);
            }
        }
        if (isset($status)) {
            $query->where('status', $status);
        }
        if (isset($limit)) {
            $query->limit($limit);
        }
        return $resource === 'count' ? $query->count() :  $query->get();
    }

    public function createWish($request)
    {
        $category = $this->categoryService->findByName($request->category);
        $wish = $this->wish->create([
            'title' => $request->title,
            'description' => $request->description,
            'age_range' => $request->age_range,
            'user_id' => $request->user_id ?? Auth::id(),
            'category_id' => $category->id,
            'created_by' => Auth::id(),
            'status' => 'approved',
        ]);
        if ($request->filled('existing_attachment')) {
            $selectedFile = $this->file->find($request->existing_attachment);
            if ($selectedFile) {
                // Get the original file path and extension
                $originalPath = $selectedFile->file_path;
                $extension = pathinfo($originalPath, PATHINFO_EXTENSION);

                // Generate new filename for the wish
                $filename = 'wish_' . $wish->id . '_' . time() . '_' . uniqid() . '.' . $extension;
                $newFilePath = "wishes/{$filename}";

                // Copy the file to new location
                if (Storage::disk('public')->exists($originalPath)) {
                    Storage::disk('public')->copy($originalPath, $newFilePath);

                    // Create new file record for the wish
                    $wish->files()->create([
                        'file_path' => $newFilePath,
                        'file_type' => $selectedFile->file_type,
                        'mime_type' => $selectedFile->mime_type,
                        'is_featured' => true, // Mark as featured since it's the selected image
                    ]);
                }
            }

        }
        // Handle new file uploads
        if ($request->hasFile('attachments')) {
            $this->handleAttachments($request->file('attachments'), $wish);
        }

        return $this->wish;
    }

    private function handleAttachments($attachments, Wish $wish)
    {
        $order = $wish->files()->count(); // Start order from current count
        foreach ($attachments as $attachment) {
            $order++;

            try {
                // Determine if file is image or video
                $mimeType = $attachment->getMimeType();
                $fileType = str_starts_with($mimeType, 'image/') ? 'image' : 'video';
                //$originalName = $attachment->getClientOriginalName();
                //$fileSize = $attachment->getSize();

                // Generate unique filename
                $extension = $attachment->getClientOriginalExtension();
                $filename = 'wish_' . $wish->id . '_' . time() . '_' . uniqid() . '.' . $extension;
                $filePath = "wishes/{$filename}";

                if ($fileType === 'image') {
                    // Handle image with Intervention Image
                    $this->handleImageUpload($attachment, $filePath);
                } else {
                    // Handle video - store directly
                    Storage::disk('public')->put($filePath, file_get_contents($attachment));
                }

                // Create media record - FIXED: uncommented required fields
                $wish->files()->create([
                    'file_path' => $filePath,
                    'file_type' => $fileType,
                    'mime_type' => $mimeType,
                    //'file_size' => $fileSize, // Uncommented and fixed variable name
                    //'order' => $order,
                    'is_featured' => $order === 1, // First file is featured
                ]);

            } catch (\Exception $e) {
                // Log the error and continue with next file
                //\Log::error('Error uploading attachment: ' . $e->getMessage());
                continue;
            }
        }
    }

    private function handleImageUpload($image, $filePath): void
    {
        // Create intervention image instance
        $img = Image::make($image->getRealPath());

        // Resize and optimize image
        $img->resize(500, 400, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        // Create canvas with a background
        //$canvas = Image::canvas(500, 400, '#dbd7d7'); // Dark gray background

        // Insert the image centered on dark canvas
        //$canvas->insert($img, 'center');

        // Add a semi-transparent dark overlay on top of the image
//        $canvas->rectangle(0, 0, 500, 400, function ($draw) {
//            $draw->background('rgba(0, 0, 0, 0.2)'); // 30% black overlay
//        });

        // Save to storage
        //Storage::disk('public')->put($filePath, $canvas->stream());
        Storage::disk('public')->put($filePath, $img->stream());
    }

    public function updateWish($request, $wish)
    {
        $category = $this->categoryService->findByName($request->category);
        $updatedWish = $wish->update([
            'title' => $request->title,
            'description' => $request->description,
            'age_range' => $request->age_range,
            //'user_id' => Auth::id(),
            'category_id' => $category->id,
            //'status' => 'approved',
        ]);

        if ($request->filled('existing_attachment')) {
            $selectedFile = $this->file->find($request->existing_attachment);
            if ($selectedFile) {
                // Get the original file path and extension
                $originalPath = $selectedFile->file_path;
                $extension = pathinfo($originalPath, PATHINFO_EXTENSION);

                // Generate new filename for the wish
                $filename = 'wish_' . $wish->id . '_' . time() . '_' . uniqid() . '.' . $extension;
                $newFilePath = "wishes/{$filename}";

                // Copy the file to new location
                if (Storage::disk('public')->exists($originalPath)) {
                    Storage::disk('public')->copy($originalPath, $newFilePath);

                    // Create new file record for the wish
                    $wish->files()->create([
                        'file_path' => $newFilePath,
                        'file_type' => $selectedFile->file_type,
                        'mime_type' => $selectedFile->mime_type,
                        'is_featured' => true, // Mark as featured since it's the selected image
                    ]);
                }
            }

        }

        // Handle new file uploads
        if ($request->hasFile('attachments')) {
            $this->handleAttachments($request->file('attachments'), $wish);
        }

        return $updatedWish;

    }

    public function deleteSingleFile($fileId)
    {
        $wishFile = File::findOrFail($fileId);
        if ($wishFile->file_path) {
            Storage::disk('public')->delete($wishFile->file_path);
        }
        return $wishFile->delete();

    }

    public function makeFeatureFile($fileId){
        $wishFile = File::findOrFail($fileId);
        if ($wishFile){
            File::where('fileable_type', Wish::class)
                ->where('fileable_id', $wishFile->fileable_id)
                ->update(['is_featured' => false]);
            $wishFile->update(['is_featured' => true]);
        }
        return $wishFile;
    }

    public function deleteWish($wish)
    {
        foreach ($wish->files as $file) {
            if ($file->file_path && Storage::disk('public')->exists($file->file_path )) {
                Storage::disk('public')->delete(getFileRealPath($file->file_path));
                $file->delete();
            }
        }
        return $wish->delete();

    }

//    public function getListByStatus($request, string $status): LengthAwarePaginator
//    {
//        $query = $this->wish->with(['user', 'category', 'files', 'featuredImage']);
//        if (isset($status)) {
//            $query->where('status', $status);
//        }
//        if ($request->filled('category_id')) {
//            $query->where('category_id', $request->category_id);
//        }
//        return $query->paginate(10)->withQueryString();
//    }

    public function getListByStatus($request, $status): LengthAwarePaginator
    {
        $user = Auth::user();
        $isDonor = $user && (checkDonor() or checkDonorWisher());

        if ($isDonor && $user->latitude && $user->longitude) {
            return $this->getWishesWithDistance($request, $status, $user);
        }

        return $this->getWishesWithoutDistance($request, $status);
    }

    private function getWishesWithDistance($request, $status, $user): LengthAwarePaginator
    {
        $currentRoute =  Route::currentRouteName();
        $earthRadius = 6371;

        $query = $this->wish->query()
            ->with(['user', 'category', 'files', 'featuredImage', 'latestFulfillment'])
            ->join('users', 'wishes.user_id', '=', 'users.id')
            ->select('wishes.*')
            ->selectRaw(
                "ROUND(? * ACOS(COS(RADIANS(?)) * COS(RADIANS(users.latitude)) *
            COS(RADIANS(users.longitude) - RADIANS(?)) +
            SIN(RADIANS(?)) * SIN(RADIANS(users.latitude))), 2) AS distance",
                [$earthRadius, $user->latitude, $user->longitude, $user->latitude]
            );

        // Apply filters
        if (isset($status)) {
            $query->where('wishes.status', $status);
        }

        if ($request->filled('category_id')) {
            $query->where('wishes.category_id', $request->category_id);
        }
        // by login donor created donations category ID


        if ($request->filled('categoryIds') and count($request->categoryIds) > 0) {
            $query->whereIn('wishes.category_id', $request->categoryIds);
        }elseif (Auth::check() and $currentRoute != 'wish.index'){
            $query->whereHas('fulfillments.wish', function ($q) {
                $q->where('user_id', Auth::id());
            });
        }
        if ($request->filled('age_range')) {
            $query->where('wishes.age_range', $request->age_range);
        }

        // Distance filter (optional)
        if ($request->filled('distance_range')) {
            // $request->distance_range should be in format "1-10" or "5-50"
            $distanceArray = explode("-", $request->distance_range);

            if (count($distanceArray) === 2) {
                $minDistance = (float) trim($distanceArray[0]);
                $maxDistance = (float) trim($distanceArray[1]);
                $query->havingBetween('distance', [$minDistance, $maxDistance]);
            }
        }

        // Only include wishes where wisher has location data
        $query->whereNotNull('users.latitude')
            ->whereNotNull('users.longitude');

        // Sort by distance ascending (nearest first)
        $query->orderBy('distance', 'asc');

        return $query->paginate(12)->withQueryString();
    }

    private function getWishesWithoutDistance($request, $status): LengthAwarePaginator
    {
        $currentRoute =  Route::currentRouteName();
        $query = $this->wish->with(['user', 'category', 'files', 'featuredImage', 'latestFulfillment']);

        if (isset($status)) {
            $query->where('status', $status);
        }

        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        if ($request->filled('categoryIds') and count($request->categoryIds) > 0) {
            $query->whereIn('wishes.category_id', $request->categoryIds);
        }elseif (Auth::check() and $currentRoute != 'wish.index'){
            $query->whereHas('fulfillments.wish', function ($q) {
                $q->where('user_id', Auth::id());
            });
        }
        if ($request->filled('age_range')) {
            $query->where('wishes.age_range', $request->age_range);
        }

        return $query->orderBy('created_at', 'desc')->paginate(12)->withQueryString();
    }

    public function findWithDistance(string $id, $user = null)
    {
        if ($user && ($user->role == 'donor') && $user->latitude && $user->longitude) {
            return $this->findWishWithDistanceQuery($id, $user);
        }
        return $this->wish->with(['user', 'category', 'files', 'featuredImage'])->findOrFail($id);
    }

    private function findWishWithDistanceQuery(string $id, $user)
    {
        $earthRadius = 6371;

        return Wish::query()
            ->with(['user', 'category', 'files', 'featuredImage', 'latestFulfillment'])
            ->join('users', 'wishes.user_id', '=', 'users.id')
            ->select('wishes.*')
            ->selectRaw(
                "ROUND(? * ACOS(COS(RADIANS(?)) * COS(RADIANS(users.latitude)) *
            COS(RADIANS(users.longitude) - RADIANS(?)) +
            SIN(RADIANS(?)) * SIN(RADIANS(users.latitude))), 2) AS distance",
                [$earthRadius, $user->latitude, $user->longitude, $user->latitude]
            )
            ->where('wishes.id', $id)
            ->whereNotNull('users.latitude')
            ->whereNotNull('users.longitude')
            ->firstOrFail();
    }

    public function getRandomWisherImage()
    {
        return $this->user->whereHas('roles', function ($role) {
            $role->where('roles.id', 4);
        })->inRandomOrder()->limit(24)->whereNotNull('image')->get(['id','name', 'image']);
    }

    public function wishFulfilRequestByDonor($request)
    {
        $fulfilment = $oldFulfilment = $this->fulfillment
            ->where('donation_id',$request->donation_id)
            ->where('wish_id', $request->wish_id)
            ->first();
        if ($oldFulfilment){
            $oldFulfilment->update([
                'donation_id' => $request->donation_id,
                'wish_id' => $request->wish_id,
                'need_admin_assistance' => $request->need_admin_assistance ?? false,
                'method' => $request->method ?? 'self-delivery',
                'note' => $request->note,
                'scheduled_at' => $request->scheduled_at,
                'status' => 'requested',
            ]);
        }else{
            // save fulfilment
            $fulfilment = $this->fulfillment->create([
                'donation_id' => $request->donation_id,
                'wish_id' => $request->wish_id,
                'need_admin_assistance' => $request->need_admin_assistance ?? false,
                'method' => $request->method ?? 'self-delivery',
                'note' => $request->note,
                'scheduled_at' => $request->scheduled_at,
                'status' => 'requested',
            ]);
        }

        // create an admin task if the donor asks for help
        if ($request->need_admin_assistance) {
            if ($fulfilment->task){
                $fulfilment->task()->update([
                    'activity_log' => json_encode(['Fulfillment requested by donor']),
                    'status' => 'new',
                ]);
            }else{
                $fulfilment->task()->create([
                    'activity_log' => json_encode(['Fulfillment requested by donor']),
                    'status' => 'new',
                ]);
            }

        }

        $wisher = $this->wish->find($request->wish_id)->user;
        // Create an in-app notification
        $wisher->notify(new WishFulfilRequestedNotification($fulfilment));
        if ($wisher->email){
            Mail::to($wisher->email)->send(new WishFulfilRequestedMail($fulfilment));
        }
        return $fulfilment;
    }

    public function getWishRequestFromDonor(): Collection
    {
       return Wish::with(['latestFulfillment','user', 'files', 'featuredImage'])
            ->where('user_id', Auth::id())
            ->has('fulfillments')
//            ->whereHas('fulfillments', function ($q) {
//                $q->where('status', 'requested');
//            })
           ->get();
    }

    public function changeFulfilmentStatus($request)
    {
        $fulfillment = $updateFulfilment = $this->fulfillment->with(['donation','donation.user','wish','wish.user','messages', 'messages.sender', 'messages.receiver'])
            ->find($request->fulfilment_id);
        if ($request->status and !in_array($fulfillment->status,['completed', 'delivered'])){
            if ($request->status == 'delivered'){
                $updateFulfilment->update([
                    'status' => 'delivered',
                    'delivered_at' => now(),
                ]);
                // 🔔 Notify wisher
                $wisher = $fulfillment->wish->user;
                $wisher->notify(new DeliveryAttemptNotification($fulfillment));

            }else{
                $updateFulfilment->update(['status' => $request->status]);
            }
        }

        return $fulfillment;
    }

    public function confirmWishReceive($request): ?object
    {
        $fulfillment = $this->findFulfillmentById($request->id);
        DB::transaction(function () use ($request, $fulfillment) {
            // store media (optional)
            if ($request->hasFile('media')) {
                foreach ($request->file('media') as $file) {
                    $file->store('confirmations', 'public');
                }
            }
            // fulfillment
            $fulfillment->update([
                'status' => 'completed',
            ]);


            // donation
            $fulfillment = $this->findFulfillmentById($request->id);
            $fulfillment->donation->update([
                'status' => 'donated',
            ]);

            // wish
            $fulfillment = $this->findFulfillmentById($request->id);
            $fulfillment->wish->update([
                'status' => 'fulfilled',
            ]);

            $fulfillment = $this->findFulfillmentById($request->id);
            // notify donor that item receipt confirms by wisher
            Notification::send(
                [$fulfillment->donation->user],
                new ItemReceivedNotification($fulfillment, $request->comment)
            );

            // task
            $fulfillment = $this->findFulfillmentById($request->id);
            if ($fulfillment->task){
                $fulfillment->task()->update([
                    'status' => 'completed',
                    'completed_at' => now(),
                    'user_id' => auth()->id(),
                    'task_notes' => $request->comment,
                ]);
                // send notification to admin
//                $fulfillment = $this->findFulfillmentById($request->id);
//                Notification::send(
//                    [$fulfillment->donation->user],
//                    new TaskClosedNotification($fulfillment, $request->comment)
//                );
            }
        });

        return $fulfillment;
    }

    public function reportWishIssue($request)
    {
        $fulfillment = $this->findFulfillmentById($request->id);

        // ✅ Create or update task (JSON-safe)
        $task = $fulfillment->task?->first();
        if (!$task) {
            $fulfillment->task()->create([
                'status' => 'in_progress',
                'task_notes' => $request->comment,
            ]);
        }else{
            $task->update([
                'status' => 'in_progress',
                'task_notes' => $request->comment,
            ]);
        }

        // ✅ Update fulfillment status
        $fulfillment->update([
            'note' => $request->comment,
            'status' => 'cancelled',
        ]);

        // 🔔 Notify donor
        $fulfillment = $this->findFulfillmentById($request->id);
        Notification::send(
            [$fulfillment->donation->user],
            new IssueReportedNotification($fulfillment, $request->comment)
        );

        return $fulfillment->fresh(['task']);
    }


    protected function findFulfillmentById($id)
    {
        return $this->fulfillment->find($id);
    }
}
