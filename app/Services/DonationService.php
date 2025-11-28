<?php

namespace App\Services;

use App\Models\Donation;
use App\Models\File;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class DonationService extends BaseService
{
    public function __construct(
        protected Donation $donation,
        protected CategoryService $categoryService,
    ){
        $this->model = $this->donation;
    }

    public function getListWithFilter($request)
    {
        $sortColumn = $request->input('sort', 'created_at');
        $sortDirection = $request->input('direction', 'desc');
        $searchName = $request->input('search_name');
        $filterStatus = $request->input('filter_status');
        // Keep query parameters when paginating
        $query = $this->donation->with(['user', 'files', 'featuredImage']);
        if (checkDonor() or checkDonorWisher()){
            $query->where('user_id', Auth::id());
        }
        return $query->when($searchName, function ($query, $searchName) {
                $query->where('name', 'like', '%' . $searchName . '%');
            })
            ->when($filterStatus, function ($query, $filterStatus) {
                $query->where('status', $filterStatus);
            })
            ->orderBy($sortColumn, $sortDirection)
            ->paginate(12) // Pagination: 10 items per page
            ->withQueryString();
    }

    public function createDonation($request)
    {
        $autoTags = $request->auto_tags;
        $autoTagsString = is_array($autoTags) ? implode(',', $autoTags) : $autoTags;

        $category = $this->categoryService->findByName($request->category);
        $donation = $this->donation->create([
            'title' => $request->title,
            'description' => $request->description,
            'item_condition' => $request->item_condition,
            'user_id' => Auth::id(),
            'category_id' => $category->id,
            'auto_tags' => $autoTagsString,
            'status' => 'available',
        ]);

        // Handle file uploads
        if ($request->hasFile('attachments')) {
            $this->handleAttachments($request->file('attachments'), $donation);
        }
        return $donation;
    }

    public function updateDonation($request, $donation)
    {
        $autoTags = $request->auto_tags;
        $autoTagsString = is_array($autoTags) ? implode(',', $autoTags) : $autoTags;
        $category = $this->categoryService->findByName($request->category);
        // Update donation
        $donation->update([
            'title' => $request->title,
            'description' => $request->description,
            'item_condition' => $request->item_condition,
            'category_id' => $category->id,
            'auto_tags' => $autoTagsString,
            'status' => $request->status,
        ]);

        // Handle new file uploads
        if ($request->hasFile('attachments')) {
            $this->handleAttachments($request->file('attachments'), $donation);
        }

        return $donation;
    }


    private function handleAttachments($attachments, Donation $donation)
    {
        $order = $donation->files()->count(); // Start order from current count
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
                $filename = 'donation_' . $donation->id . '_' . time() . '_' . uniqid() . '.' . $extension;
                $filePath = "donations/{$filename}";

                if ($fileType === 'image') {
                    // Handle image with Intervention Image
                    $this->handleImageUpload($attachment, $filePath);
                } else {
                    // Handle video - store directly
                    Storage::disk('public')->put($filePath, file_get_contents($attachment));
                }

                // Create media record - FIXED: uncommented required fields
                $donation->files()->create([
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
        Storage::disk('public')->put($filePath, $img->stream());
    }

    public function deleteSingleFile($fileId)
    {
        $donationFile = File::findOrFail($fileId);
        if ($donationFile->file_path) {
            Storage::disk('public')->delete($donationFile->file_path);
        }
        return $donationFile->delete();

    }

    public function donationByStatus($status = null, $resource = 'list', $limit = null, $for = 'frontend', $userId = null): Collection|int
    {
        $userId = $userId ?? Auth::id();
        $query = Donation::with(['user', 'category', 'files', 'featuredImage'])->orderBy('created_at', 'desc');
        if ($for === 'admin') {
            //if (checkDonor()){
                $query->where('user_id', $userId);
            //}
        }
        if (isset($status)) {
            $query->where('status', $status);
        }
        if (isset($limit)) {
            $query->limit($limit);
        }
        return $resource === 'count' ? $query->count() :  $query->get();
    }

    public function getItemConditions()
    {
        return $this->donation->orderBy('item_condition', 'asc')->get(['id','item_condition as name'])->unique('item_condition');
    }

    public function getListByStatus($request, string $status): LengthAwarePaginator
    {
        $query = $this->donation->with(['user', 'category', 'files', 'featuredImage']);
        if (isset($status)) {
            $query->where('status', $status);
        }
        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        return $query->orderBy('created_at', 'desc')->paginate(12)->withQueryString();
    }

    public function deleteDonation($donation)
    {
        foreach ($donation->files as $file) {
            if ($file->file_path && Storage::disk('public')->exists($file->file_path )) {
                Storage::disk('public')->delete($file->file_path);
                $file->delete();
            }
        }
        return $donation->delete();
    }

    public function makeFeatureFile($fileId){
        $donorFile = File::findOrFail($fileId);
        if ($donorFile){
            File::where('fileable_type', Donation::class)
                ->where('fileable_id', $donorFile->fileable_id)
                ->update(['is_featured' => false]);
            $donorFile->update(['is_featured' => true]);
        }
        return $donorFile;
    }

    public function getDonationsByCategoryAndStatus(string $categoryId, string $status = null)
    {
        return $this->donation->where('user_id', Auth::id())
            ->where('category_id', $categoryId)
            ->where('status', $status)
            ->orderBy('title', 'asc')
            ->get(['id', 'title as name']);
    }
}
