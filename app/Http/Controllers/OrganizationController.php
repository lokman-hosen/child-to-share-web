<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use App\Models\Organization;
use App\Services\DonationService;
use App\Services\OrganizationService;
use App\Services\UserService;
use App\Services\WishService;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    const moduleDirectory = 'Partner/';
    const moduleName = 'Partner List';
    public function __construct(
        protected OrganizationService $organizationService,
        protected WishService $wishService,
        protected DonationService $donationService,
        Protected UserService $userService,

    ){}

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $organizations = $this->organizationService->organizationList();
        $totalWishCount = $this->wishService->wishByStatus(null, 'count',  null,'frontend');
        $totalDonationCount = $this->donationService->DonationByStatus(null, 'count',  null,'frontend');
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
            'organizations' => $organizations,
            'totalWishCount' => $totalWishCount,
            'totalDonationCount' => $totalDonationCount,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrganizationRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Organization $organization)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationRequest $request, Organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        //
    }

    public function getUserListByRole(): Response|\Inertia\ResponseFactory
    {
        $role = Route::currentRouteName() == 'donor.list' ? 'donor' : 'wisher';
        $users = $this->userService->getUsersByRole($role);
        return inertia(self::moduleDirectory.'Contributor', [
            'module' => $role == 'donor' ? 'Contributors' : 'Wishers',
            'type' => $role,
            'title' => $role == 'donor' ? 'Contributors' : 'Happy Wish Creators',
            'subTitle' => $role == 'donor' ?
                'Meet the generous individuals and organizations who make wishes come true through their kindness and support. Every contribution creates a ripple of positive change' :
                'Meet the individuals and organizations who share their needs and aspirations, seeking support to make their wishes a reality. Every wish is a step toward positive change, made possible through connection and compassion',
            'users' => $users
        ]);
    }
}
