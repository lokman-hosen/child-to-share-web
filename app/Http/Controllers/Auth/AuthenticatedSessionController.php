<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        if (Auth::check()){
            if (checkDonor()){
                return redirect()->intended(route('donation.index', absolute: false));
            }
        }
        if (Auth::check()){
            if (checkWisher()){
                return redirect()->intended(route('wish.index', absolute: false));
            }
        }

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Get user's active fulfillment IDs before logout
        $user = $request->user();
        $fulfillmentIds = \App\Models\Fulfillment::where(function($q) use ($user) {
            $q->whereHas('wish', fn($q) => $q->where('user_id', $user->id))
                ->orWhereHas('donation', fn($q) => $q->where('user_id', $user->id));
        })
            ->pluck('id');

        // Broadcast logout event for each fulfillment
        foreach ($fulfillmentIds as $fulfillmentId) {
            broadcast(new \App\Events\UserLoggedOut($user->id, $fulfillmentId));
        }
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
