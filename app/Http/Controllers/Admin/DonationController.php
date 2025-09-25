<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDonationRequest;
use App\Http\Requests\UpdateDonationRequest;
use App\Models\Donation;
use Inertia\Inertia;
use Inertia\Response;

class DonationController extends Controller
{
    const moduleDirectory = 'Admin/Donation/';
    const moduleName = 'Donation List Category';
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
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
