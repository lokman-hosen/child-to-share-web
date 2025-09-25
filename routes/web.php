<?php

use App\Http\Controllers\Admin\DonationController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\WishController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

// frontend routes
Route::controller( \App\Http\Controllers\WishController::class)->group(function () {
    Route::get('wish', 'index')->name('wish.index');
});
Route::controller(\App\Http\Controllers\DonationController::class)->group(function () {
    Route::get('donation', 'index')->name('donation.index');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resources([
        'donations' => DonationController::class,
        'wishes' => WishController::class,
        'messages' => MessageController::class,
    ]);
});

require __DIR__.'/auth.php';
