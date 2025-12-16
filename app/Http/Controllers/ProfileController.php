<?php

namespace App\Http\Controllers;

use App\Actions\FileSizes;
use App\Helpers\CommonHelper;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Donation;
use App\Models\User;
use App\Services\DonationService;
use App\Services\WishService;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function __construct(
        protected WishService $wishService,
        protected DonationService $donationService,

    ){}
    const moduleDirectory = 'Profile/';
    const moduleName = 'Profile';
    public function show(string $id = null): Response
    {
        $user = $id ? User::find($id) :  Auth::user();
        $availableDonationCount = $donatedDonationCount = $activeWishCount = $fulfilledWishCount = $totalWishCount = 0;
        if ($user->role == 'donor-wisher'){
            // donation
            $availableDonationCount = $this->donationService
                ->donationByStatus('available', 'count',  null,'admin', $id);
            $donatedDonationCount = $this->donationService
                ->donationByStatus('donated', 'count',  null,'admin', $id);

            $totalWishCount = $this->wishService
                ->wishByStatus(null, 'count',  null,'admin', $id);

            $activeWishCount = $this->wishService
                ->wishByStatus('approved', 'count',  null,'admin', $id);
            $fulfilledWishCount = $this->wishService
                ->wishByStatus('fulfilled', 'count',  null,'admin', $id);
        }elseif ($user->role == 'donor'){
            $user->load(['roles', 'organizations']);
            // donation
            $availableDonationCount = $this->donationService
                ->donationByStatus('available', 'count',  null,'admin', $id);
            $donatedDonationCount = $this->donationService
                ->donationByStatus('donated', 'count',  null,'admin', $id);
        }elseif ($user->role == 'wisher'){
            $user->load(
                ['wisher', 'organizations']
            );
            $totalWishCount = $this->wishService
                ->wishByStatus(null, 'count',  null,'admin', $id);

            $activeWishCount = $this->wishService
                ->wishByStatus('approved', 'count',  null,'admin', $id);
            $fulfilledWishCount = $this->wishService
                ->wishByStatus('fulfilled', 'count',  null,'admin', $id);

        }
        return Inertia::render(self::moduleDirectory.'Partials/Profile', [
            'module' => self::moduleName,
            'user' => $user,
            'availableDonationCount' => $availableDonationCount,
            'donatedDonationCount' => $donatedDonationCount,
            'totalWishCount'  => $totalWishCount,
            'activeWishCount'  => $activeWishCount,
            'fulfilledWishCount'  => $fulfilledWishCount,
        ]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = Auth::user();
//        if (checkDonorWisher()){
//            $user->load('donor');
//        }elseif (checkDonor()){
//            $user->load('donor');
//        }elseif (checkWisher()){
//            $user->load('wisher');
//        }
        //dd($request->user() instanceof MustVerifyEmail);
        return Inertia::render(self::moduleDirectory.'Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'user' => $user,
            'guardianRelations' => CommonHelper::guardianRelations(),
            'genders' => CommonHelper::genders(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();
        return Redirect::route('profile.edit');
    }

    public function updateProfile(ProfileUpdateRequest $request)
    {
        $user = Auth::user();
        $photoPath = $user->image;

//        if ($request->hasFile('photo')) {
//            // Delete old image from 'public' disk
//            if ($user->image && Storage::disk('public')->exists($user->image)) {
//                Storage::disk('public')->delete($user->image);
//            }
//            // Store new image
//            $photoPath = $request->file('photo')->store('photos', 'public');
//        }
        if ($request->hasFile('photo')) {
            $imageFile = $request->file('photo');
            //$photoPath = uploadImage($imageFile, self::fileSize, self::filePath,'store', null);
            if ($user->image && Storage::disk('public')->exists($user->image)){
                $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'update', $user->image);
            }else{
                $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'store', null);
            }
        }

        $user->update([
            'name' => $request->name,
            'email' => checkEmpty($request->email),
            'phone' => $request->phone,
            'image' => $photoPath,
            'guardian_name' => checkEmpty($request->guardian_name),
            'guardian_phone' => checkEmpty($request->guardian_phone),
            'relationship' => checkEmpty($request->relationship),
            'dob' => $request->dob,
            'gender' => $request->gender,
            'latitude' => $request->latitude ?? $user->latitude,
            'longitude' => $request->longitude ?? $user->longitude,
            'address' => $request->address ?? $user->address,
        ]);
        if (Auth::user()->user_type === 'organization'){
            Auth::user()->organization()->update([
                'name' => $request->name,
                'contact_email' => $request->email,
                'contact_phone' => $request->phone,
                'address' => $request->address ?? null,
                'description' => $request->description ?? null,
            ]);
        }
        if ($user){
            return Redirect::back()->with('success', 'Profile updated successfully.');
        }
        return Redirect::back()->with('error', 'Error to updated Profile.');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function passwordChangeForm(): Response
    {
        return Inertia::render(self::moduleDirectory.'Partials/UpdatePasswordForm');
    }
}
