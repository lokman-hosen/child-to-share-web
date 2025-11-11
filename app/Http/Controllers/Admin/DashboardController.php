<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\DonationService;
use App\Services\WishService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use function Laravel\Prompts\table;

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
        // insert donor info to user table
//        $donors = DB::table('donors')->get();
//        foreach ($donors as $donor){
//            User::where('id', $donor->user_id)->update([
//                'dob' => $donor->dob,
//                'guardian_name' => $donor->guardian_name ?? null,
//                'guardian_phone' => $donor->guardian_phone ?? null,
//                'relationship' => $donor->relationship ?? null,
//                'gender' => $donor->gender ?? 'male',
//                'email_verified_at' => now(),
//                'phone_verified_at' => now(),
//            ]);
//        }
        // insert wisher info to the user table
//        $wishers = DB::table('wishers')->get();
//        foreach ($wishers as $wisher){
//            User::where('id', $wisher->user_id)->update([
//                'dob' => $wisher->dob,
//                'guardian_name' => $wisher->guardian_name ?? null,
//                'guardian_phone' => $wisher->guardian_phone ?? null,
//                'relationship' => $wisher->relationship ?? null,
//                'gender' => $wisher->gender ?? 'male',
//                'email_verified_at' => now(),
//                'phone_verified_at' => now(),
//            ]);
//        }

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
