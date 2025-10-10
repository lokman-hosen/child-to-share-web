<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DonationService;
use App\Services\WishService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __construct(
        protected DonationService $donationService,
        protected WishService $wishService,

    ){}
    const moduleDirectory = 'Dashboard/';
    const moduleName = 'Dashboard';

    public function index(): Response
    {
        // donation
        $availableDonationCount = $this->donationService
            ->donationByStatus('available', 'count',  null,'admin');
        $donatedDonationCount = $this->donationService
            ->donationByStatus('donated', 'count',  null,'admin');
        // wish
        $activeWishCount = $this->wishService
            ->wishByStatus('approved', 'count',  null,'admin');
        $fulfilledWishCount = $this->wishService
            ->wishByStatus('fulfilled', 'count',  null,'admin');
        return Inertia::render('Dashboard', [
            'module' => self::moduleName,
            'availableDonationCount' => $availableDonationCount,
            'donatedDonationCount' => $donatedDonationCount,
            'activeWishCount' => $activeWishCount,
            'fulfilledWishCount' => $fulfilledWishCount,
        ]);
    }
}
