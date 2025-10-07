<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Models\Donation;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }

    public function getDonationImages(Request $request, $category)
    {
        try {
            // Find category by name
            $category = Category::where('name', $category)->first();

            if (!$category) {
                return response()->json([
                    'success' => false,
                    'message' => 'Category not found',
                    'images' => []
                ]);
            }

            // Get all donations in this category
            $donationIds = Donation::where('category_id', $category->id)
                ->pluck('id');

            // Get files that belong to these donations
            $images = File::where('fileable_type', Donation::class)
                ->whereIn('fileable_id', $donationIds)
                ->where('file_type', 'image')
                ->where('is_featured', true)
                ->limit(5)
                ->get()
                ->map(function ($file) {
                    return [
                        'id' => $file->id,
                        'url' => Storage::url($file->file_path),
                        'alt_text' => $file->file_name,
                        'file_name' => $file->file_name,
                        'is_featured' => $file->is_featured,
                    ];
                });

            return response()->json([
                'success' => true,
                'images' => $images
            ]);

        } catch (\Exception $e) {
            //\Log::error('Error fetching donation images: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Error fetching images',
                'images' => []
            ], 500);
        }
    }

}
