<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Models\Donation;
use App\Models\File;
use App\Services\CategoryService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    const moduleDirectory = 'Admin/Category/';
    const moduleName = 'Category';

    public function __construct(
        protected CategoryService $categoryService,
    ){}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $categories = $this->categoryService->getListWithFilter($request);
        return Inertia::render(self::moduleDirectory.'List', [
            'module' => self::moduleName,
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render(self::moduleDirectory.'Create', [
            'module' => self::moduleName,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request): RedirectResponse
    {
        $request->merge(['slug' => Str::slug($request->name)]);
        $category = $this->categoryService->create($request->all());
        if ($category){
            return redirect()->route('categories.index')->with('success', 'Category created successfully!');
        }
        return redirect()->route('categories.index')->with('error', 'Error to created category');
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
    public function edit(Category $category): Response
    {
        $statuses = getStatus();
        return Inertia::render(self::moduleDirectory.'Edit', [
            'module' => self::moduleName,
            'category' => $category,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $request->merge(['slug' => Str::slug($request->name)]);
        $category = $this->categoryService->update($request->all(), $category->id);
        if ($category){
            return redirect()->route('categories.index')->with('success', 'Category updated successfully!');
        }
        return redirect()->route('categories.index')->with('error', 'Error to updated category');
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
