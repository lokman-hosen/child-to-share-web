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
        $wish = $this->wishService->createWish($request);
        if ($wish){
            return redirect()->route('wishes.index')->with('success', 'Donation created successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to created donation');
    }

    /**
     * Display the specified resource.
     */
    public function show(Wish $wish): Response
    {
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
    public function edit(Wish $wish)
    {
        if (checkWisher()){
            if (!($wish->user_id == Auth::id())){
                abort(403);
            }
        }

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
    public function update(UpdateWishRequest $request, Wish $wish)
    {
        if (checkDonor()){
            if (!($wish->user_id == Auth::id())){
                abort(403);
            }
        }
        $updateWish = $this->wishService->updateWish($request, $wish);
        if ($updateWish){
            return redirect()->route('wishes.index')->with('success', 'Wish updated successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to updated wish');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wish $wish)
    {
        //
    }
}
