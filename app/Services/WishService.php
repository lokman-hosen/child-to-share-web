<?php

namespace App\Services;

use App\Models\Donation;
use App\Models\File;
use App\Models\Organization;
use App\Models\Wish;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class WishService extends BaseService
{
    public function __construct(
        protected Wish $wish,
        protected File $file,
        protected CategoryService $categoryService,
    ){
        $this->model = $this->wish;
    }
    public function donationByStatus($status = null, $resource = 'list', $limit = null, $for = 'frontend'): Collection|int
    {
        $query = $this->wish->with(['user', 'category', 'files', 'featuredImage']);
        if ($for === 'admin') {
            if (checkWisher()){
                $query->where('user_id', Auth::id());
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
            'user_id' => Auth::id(),
            'category_id' => $category->id,
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

        }// Handle new file uploads
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

        $canvas = Image::canvas(500,400);
        $canvas->insert($img, 'center');
        // Save to storage
        Storage::disk('public')->put($filePath, $canvas->stream());
    }
}
