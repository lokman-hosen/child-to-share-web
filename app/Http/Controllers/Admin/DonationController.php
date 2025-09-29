<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\Donation;
use App\Services\CategoryService;
use App\Services\DonationService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
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
    public function index(Request $request): Response
    {
        $donations = $this->donationService->getListWithFilter($request);
//        if (checkAdmin()){
//            return Inertia::render(self::moduleDirectory.'List', [
//                'module' => self::moduleName,
//                'donations' => $donations,
//            ]);
//        }else{
//            return Inertia::render(self::moduleDirectory.'Index', [
//                'module' => self::moduleName,
//                'donations' => $donations,
//            ]);

        return Inertia::render(self::moduleDirectory.'List', [
            'module' => self::moduleName,
            'donations' => $donations,
        ]);
       // }
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
    public function show(Donation $donation): Response
    {
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
        $donation->load([
            'user',
            'organization',
            'category',
            'files' // Make sure this matches your relationship name
        ]);
        $categories = $this->categoryService->listByStatus();
        $statuses = donationStatus();
        return Inertia::render(self::moduleDirectory.'Edit', [
            'module' => self::moduleName,
            'donation' => $donation,
            'categories' => $categories,
            'statuses' => $statuses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDonationRequest $request, Donation $donation): RedirectResponse
    {
        $updateDonation = $this->donationService->updateDonation($request, $donation);
        if ($updateDonation){
            return redirect()->route('donations.index')->with('success', 'Donation updated successfully!');
        }
        return redirect()->route('donations.index')->with('error', 'Error to updated donation');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Donation $donation)
    {
        //
    }
}
