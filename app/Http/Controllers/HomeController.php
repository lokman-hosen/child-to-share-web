<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Models\Wish;
use App\Services\DonationService;
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

    ){}
    const moduleDirectory = 'Donation/';
    const moduleName = 'Donation List';
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $donations = $this->donationService->donationByStatus('available', 'list', 6, 'frontend');
        $wishes = $this->wishService->wishByStatus('approved', 'list', 6, 'frontend');
        $activeDonorCount = 10;
        $totalWishCount = $this->wishService
            ->wishByStatus(null, 'count',  null,'frontend');
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'module' => self::moduleName,
            'donations' => $donations,
            'wishes' => $wishes,
            'activeDonorCount' => $activeDonorCount,
            'totalWishCount' => $totalWishCount,
            'fulfilWishCount' => 0,
            'community' => 0,
        ]);
    }
}
