<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWishRequest;
use App\Http\Requests\UpdateWishRequest;
use App\Models\Wish;
use App\Services\CategoryService;
use App\Services\WishService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class WishController extends Controller
{
    public function __construct(
        protected CategoryService $categoryService,
        protected WishService $wishService

    ){}
    const moduleDirectory = 'Wish/';
    const moduleName = 'Wish List';
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {

        $categories = $this->categoryService->listByStatus();
        $wishes = $this->wishService->getListByStatus($request, 'approved');
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
            'wishes' => $wishes,
            'categories' => $categories,
            'ageRanges' => ageRanges()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWishRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $user = Auth::user();
        $wish = $this->wishService->findWithDistance($id, $user);

        $wish->load([
            'user',
            'organization',
            'category',
            'files'
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
