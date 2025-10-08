<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreWishRequest;
use App\Http\Requests\UpdateWishRequest;
use App\Models\Wish;
use App\Services\CategoryService;
use App\Services\WishService;
use Illuminate\Http\RedirectResponse;
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
    public function index(): Response
    {
        if (checkAdmin()){
            return Inertia::render(self::moduleDirectory.'List', [
                'module' => self::moduleName,
            ]);
        }else{
            return Inertia::render(self::moduleDirectory.'Index', [
                'module' => self::moduleName,
            ]);
        }
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
        //dd($request->all());
        $wish = $this->wishService->createWish($request);
        if ($wish){
            return redirect()->route('wishes.index')->with('success', 'Donation created successfully!');
        }
        return redirect()->route('wishes.index')->with('error', 'Error to created donation');
    }

    /**
     * Display the specified resource.
     */
    public function show(Wish $wish)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wish $wish)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWishRequest $request, Wish $wish)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wish $wish)
    {
        //
    }
}
