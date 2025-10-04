<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use App\Services\CategoryService;
use App\Services\DonationService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DonationController extends Controller
{
    public function __construct(
        protected CategoryService $categoryService,
        protected DonationService $donationService

    ){}
    const moduleDirectory = 'Donation/';
    const moduleName = 'Donation List';
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $categories = $this->categoryService->listByStatus();
        $donations = $this->donationService->getListByStatus($request, 'available');
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
            'donations' => $donations,
            'categories' => $categories,
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        $donation = $this->donationService->find($id);
        $donation->load([
            'user',
            'organization',
            'category',
            'files' // Make sure this matches your relationship name
        ]);
        return Inertia::render(self::moduleDirectory.'Show', [
            'module' => self::moduleName,
            'donation' => $donation,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Donation $donation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Donation $donation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Donation $donation)
    {
        //
    }
}
