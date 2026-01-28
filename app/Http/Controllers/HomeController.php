<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Models\Wish;
use App\Services\CategoryService;
use App\Services\DonationService;
use App\Services\OrganizationService;
use App\Services\UserService;
use App\Services\WishService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function __construct(
        protected DonationService $donationService,
        protected WishService $wishService,
        protected UserService $userService,
        protected OrganizationService $organizationService,
        protected CategoryService $categoryService

    ){}
    const moduleDirectory = 'Donation/';
    const moduleName = 'Gift List';
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $donations = $this->donationService->donationByStatus('available', 'list', 6, 'frontend');
        $wishes = $this->wishService->wishByStatus('approved', 'list', 6, 'frontend');
        $wisherImages = $this->wishService->getRandomWisherImage();
        $activeDonorCount = $this->userService->userByRoleAndStatus('donor', true);
        $totalWishCount = $this->wishService
            ->wishByStatus(null, 'count',  null,'frontend');
        $fulfilledWishCount = $this->wishService
            ->wishByStatus('fulfilled', 'count',  null,'frontend');
        $organizationCount = $this->organizationService->count();
        $categories = $this->categoryService->getList();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'module' => self::moduleName,
            'donations' => $donations,
            'wishes' => $wishes,
            'activeDonorCount' => $activeDonorCount,
            'totalWishCount' => $totalWishCount,
            'wisherImages' => $wisherImages,
            'fulfilWishCount' => $fulfilledWishCount,
            'community' => $organizationCount,
            'categories' => $categories,
        ]);
    }
}
