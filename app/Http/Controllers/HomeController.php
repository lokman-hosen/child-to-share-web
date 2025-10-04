<?php

namespace App\Http\Controllers;

use App\Models\Donor;
use App\Services\DonationService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function __construct(
        protected DonationService $donationService

    ){}
    const moduleDirectory = 'Donation/';
    const moduleName = 'Donation List';
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $donations = $this->donationService->donationByStatus('available', 'list', 3, 'frontend');
        $activeDonorCount = Donor::count();
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'module' => self::moduleName,
            'donations' => $donations,
            'activeDonorCount' => $activeDonorCount,
            'activeWisherCount' => 0,
            'fulfilWishCount' => 0,
            'community' => 0,
        ]);
    }
}
