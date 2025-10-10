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
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class DonationController extends Controller
{
    public function __construct(
        protected CategoryService $categoryService,
        protected DonationService $donationService

    ){}
    const moduleDirectory = 'Admin/Donation/';
    const moduleName = 'Donation';
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $donations = $this->donationService->getListWithFilter($request);
        return Inertia::render(self::moduleDirectory.'List', [
            'module' => self::moduleName,
            'donations' => $donations,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $categories = $this->categoryService->listByStatus();
        $statuses = donationStatus();
        $itemConditions = $this->donationService->getItemConditions();
        return Inertia::render(self::moduleDirectory.'Create', [
            'module' => self::moduleName,
            'categories' => $categories,
            'statuses' => $statuses,
            'itemConditions' => $itemConditions,
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
    public function edit(Donation $donation): Response
    {
        if (checkDonor()){
            if (!($donation->user_id == Auth::id())){
                abort(403);
            }
        }

        $donation->load([
            'user',
            'organization',
            'category',
            'files' // Make sure this matches your relationship name
        ]);
        $categories = $this->categoryService->listByStatus();
        $statuses = donationStatus();
        $itemConditions = $this->donationService->getItemConditions();
        return Inertia::render(self::moduleDirectory.'Edit', [
            'module' => self::moduleName,
            'donation' => $donation,
            'categories' => $categories,
            'statuses' => $statuses,
            'itemConditions' => $itemConditions,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDonationRequest $request, Donation $donation): RedirectResponse
    {
        if (checkDonor()){
            if (!($donation->user_id == Auth::id())){
                abort(403);
            }
        }
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
        if (checkDonor()){
            if (!($donation->user_id == Auth::id())){
                abort(403);
            }
        }
        $deleteDonationItem = $this->donationService->deleteDonation($donation);
        if ($deleteDonationItem){
            return redirect()->route('donations.index')->with('success', 'Donation item deleted successfully.');
        }
        return redirect()->route('donations.index')->with('error', 'Opps... Failed to delete donation item.');
    }

    public function deleteDonationFile(string $fileId): RedirectResponse
    {
        $donationFile = $this->donationService->deleteSingleFile($fileId);
        if ($donationFile){
            return redirect()->back()->with('success', 'Donation file deleted successfully!');
        }
        return redirect()->back()->with('error', 'Error to delete donation file');
    }

    public function makeFeatureFile(string $fileId): RedirectResponse
    {
        $donationFile = $this->donationService->makeFeatureFile($fileId);
        if ($donationFile){
            return redirect()->back()->with('success', 'Make file featured successfully!');
        }
        return redirect()->back()->with('error', 'Error to make feature file');
    }


}
