<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWishRequest;
use App\Http\Requests\UpdateWishRequest;
use App\Models\Wish;
use App\Services\CategoryService;
use App\Services\WishService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class WishController extends Controller
{
    public function __construct(
        protected WishService $wishService,
        protected CategoryService $categoryService,

    ){}
    const moduleDirectory = 'Admin/Wish/';
    const moduleName = 'Wish';
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        Gate::authorize('viewAny', Wish::class);
        $wishes = $this->wishService->getListWithFilter($request);
        return Inertia::render(self::moduleDirectory.'List', [
            'module' => self::moduleName,
            'wishes' => $wishes,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        Gate::authorize('create', Wish::class);
        $categories = $this->categoryService->listByStatus();
        return Inertia::render(self::moduleDirectory.'Create', [
            'module' => self::moduleName,
            'categories' => $categories,
            'ageRanges' => ageRanges()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWishRequest $request): RedirectResponse
    {
        Gate::authorize('create', Wish::class);
        $wish = $this->wishService->createWish($request);
        if ($wish){
            return redirect()->route('wishes.index')->with('success', 'Wish created successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to created wish');
    }

    /**
     * Display the specified resource.
     */
    public function show(Wish $wish): Response
    {
        Gate::authorize('view', $wish);
        $wish->load([
            'user',
            'organization',
            'category',
            'files' // Make sure this matches your relationship name
        ]);
        return Inertia::render(self::moduleDirectory.'Show', [
            'module' => self::moduleName,
            'wish' => $wish,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wish $wish): Response
    {
        Gate::authorize('update', $wish);
        $wish->load([
            'user',
            'organization',
            'category',
            'files' // Make sure this matches your relationship name
        ]);
        $categories = $this->categoryService->listByStatus();
        $statuses = wishStatus();
        return Inertia::render(self::moduleDirectory.'Edit', [
            'module' => self::moduleName,
            'categories' => $categories,
            'ageRanges' => ageRanges(),
            'wish' => $wish,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWishRequest $request, Wish $wish): RedirectResponse
    {
        Gate::authorize('update', $wish);
        $updateWish = $this->wishService->updateWish($request, $wish);
        if ($updateWish){
            return redirect()->route('wishes.index')->with('success', 'Wish updated successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to updated wish');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wish $wish): RedirectResponse
    {
        Gate::authorize('delete', $wish);
        $deleteWishItem = $this->wishService->deleteWish($wish);
        if ($deleteWishItem){
            return redirect()->route('wishes.index')->with('success', 'Wish item deleted successfully.');
        }
        return redirect()->route('wishes.index')->with('error', 'Opps... Failed to delete wish item.');
    }

    public function deleteWishFile(string $fileId): RedirectResponse
    {
        $wishFile = $this->wishService->deleteSingleFile($fileId);
        if ($wishFile){
            return redirect()->back()->with('success', 'Wish file deleted successfully!');
        }
        return redirect()->back()->with('error', 'Error to delete wish file');
    }

    public function makeFeatureFile(string $fileId): RedirectResponse
    {
        $wishFile = $this->wishService->makeFeatureFile($fileId);
        if ($wishFile){
            return redirect()->back()->with('success', 'Make file featured successfully!');
        }
        return redirect()->back()->with('error', 'Error to make feature file');
    }

    public function wishList(Request $request)
    {
        $categoryIds = [];
        if (checkDonor() or checkDonorWisher()){
            $categoryIds = Auth::user()->donations()->pluck('category_id');
        }
        $request->merge(['categoryIds' => $categoryIds]);

        $wishes = $this->wishService->getListByStatus($request, 'approved');
        return Inertia::render(self::moduleDirectory.'FullFillWish', [
            'module' => "Wishes Near You",
            'wishes' => $wishes,
        ]);
    }
}
