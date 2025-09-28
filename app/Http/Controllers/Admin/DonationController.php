<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\Donation;
use App\Services\CategoryService;
use App\Services\DonationService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class DonationController extends Controller
{
    public function __construct(
        protected CategoryService $categoryService,
        protected DonationService $donationService

    ){}
    const moduleDirectory = 'Admin/Donation/';
    const moduleName = 'Donation List';
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
        $statuses = donationStatus();
        return Inertia::render(self::moduleDirectory.'Create', [
            'module' => self::moduleName,
            'categories' => $categories,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDonationRequest $request): RedirectResponse
    {
        $donation = $this->donationService->createDonation($request);
        if ($donation){
            return redirect()->route('donations.index')->with('success', 'Donation created successfully!');
        }
        return redirect()->route('donations.index')->with('error', 'Error to created donation');

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
