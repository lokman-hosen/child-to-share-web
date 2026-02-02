<?php

namespace App\Http\Controllers;

use App\Services\DonationService;
use App\Services\OrganizationService;
use App\Services\UserService;
use App\Services\WishService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function __construct(
        protected DonationService $donationService,
        protected WishService $wishService,
        protected UserService $userService,
        protected OrganizationService $organizationService,

    ){}
    const moduleDirectory = 'About/';
    const moduleName = 'About Us';
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $fulfilledWishCount = $this->wishService->wishByStatus('fulfilled', 'count',  null,'frontend');
        $activeDonorCount = $this->userService->userByRoleAndStatus('donor', true);
        $totalWishCount = $this->wishService->wishByStatus(null, 'count',  null,'frontend');
        $organizations = $this->organizationService->organizationList();
        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
             'activeDonorCount' => $activeDonorCount,
//            'activeWisherCount' => $activeWisherCount,
            'totalWishCount' => $totalWishCount,
              'fulfilWishCount' => $fulfilledWishCount,
            'organizations' => $organizations,

        ]);
    }
}
