<?php

namespace App\Http\Controllers;

use App\Helpers\CommonHelper;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Donation;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    const moduleDirectory = 'Profile/';
    const moduleName = 'Profile';
    public function show(string $id = null): Response
    {
        $user = $id ? User::find($id) :  Auth::user();
        $availableDonationCount = 0;
        $donatedDonationCount = 0;
        if (checkDonor()){
            $user->load(['donor', 'organizations']);
            $availableDonationCount = Donation::where('user_id',$user->id)->where('status', 'available')->count();
            $donatedDonationCount = Donation::where('user_id',$user->id)->where('status', 'donated')->count();
        }elseif (checkWisher()){
            $user->load(['wisher', 'organizations']);
        }
        return Inertia::render(self::moduleDirectory.'Partials/Profile', [
            'module' => self::moduleName,
            'user' => $user,
            'availableDonationCount' => $availableDonationCount,
            'donatedDonationCount' => $donatedDonationCount,
        ]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $user = Auth::user();
        if (checkDonor()){
            $user->load('donor');
        }elseif (checkWisher()){
            $user->load('wisher');
        }
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
//        $request->user()->fill($request->validated());
//
//        if ($request->user()->isDirty('email')) {
//            $request->user()->email_verified_at = null;
//        }
//
//        $request->user()->save();

        $user = Auth::user();
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return Redirect::route('profile.edit');
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
