<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Services\DonationService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DonationController extends Controller
{
    public function __construct(
        //protected CategoryService $categoryService,
        protected DonationService $donationService

    ){}
    const moduleDirectory = 'Donation/';
    const moduleName = 'Donation List';
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
        ]);

        $donations = $this->donationService->getListByStatus($request, 'available');
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
            'donations' => $donations,
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
    public function store(StoreDonationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Donation $donation)
    {
        //
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
    public function update(UpdateDonationRequest $request, Donation $donation)
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
