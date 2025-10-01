<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\DonationService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __construct(
        protected DonationService $donationService

    ){}
    const moduleDirectory = 'Dashboard/';
    const moduleName = 'Dashboard';

    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'module' => self::moduleName,
        ]);
    }
}
