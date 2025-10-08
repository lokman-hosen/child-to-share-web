<?php

namespace App\Services;

use App\Models\Donation;
use App\Models\File;
use App\Models\Organization;
use App\Models\Wish;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class WishService extends BaseService
{
    public function __construct(
        protected Wish $wish,
        protected File $file,
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
        $wish = $this->wish->create([
            'title' => $request->title,
            'description' => $request->description,
            'age_range' => $request->age_range,
            'user_id' => Auth::id(),
            'category_id' => $request->category_id,
            'status' => 'approved',
        ]);
        if ($request->filled('existing_attachment')) {
             $selectedFile = $this->file->find($request->existing_attachment)->file_path;
            Storage::copy('old/file.jpg', 'new/file.jpg');
            $wish->files()->create([
                'file_path' => $filePath,
                'file_type' => $fileType,
                'mime_type' => $mimeType,
                //'file_size' => $fileSize, // Uncommented and fixed variable name
                //'order' => $order,
                'is_featured' => $order === 1, // First file is featured
            ]);

        }

    }
}
