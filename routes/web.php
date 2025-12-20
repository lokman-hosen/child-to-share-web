<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DonationController;
use App\Http\Controllers\Admin\MessageController;
use App\Http\Controllers\Admin\OrganizationController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\WishController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//})->name('home');

// frontend routes
Route::controller( \App\Http\Controllers\HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
});

Route::controller( \App\Http\Controllers\WishController::class)->group(function () {
    Route::get('wish', 'index')->name('wish.index');
    Route::get('wish/{id}', 'show')->name('wish.show');
});
Route::controller(\App\Http\Controllers\DonationController::class)->group(function () {
    Route::get('donation', 'index')->name('donation.index');
    Route::get('donation/{id}', 'show')->name('donation.show');
});


//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('image-resize', [DashboardController::class, 'resizeAllImagesInDirectory'])->name('resizeAllImagesInDirectory');

});

Route::middleware('auth')->group(function () {
    Route::get('/my-profile/{id?}', [ProfileController::class, 'show'])->name('my.profile');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/profile-update', [ProfileController::class, 'updateProfile'])->name('user.profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('user-password', [ProfileController::class, 'passwordChangeForm'])->name('user.password.form');

    Route::resources([
        'users' => UserController::class,
        'donations' => DonationController::class,
        'wishes' => WishController::class,
        'messages' => MessageController::class,
        'organizations' => OrganizationController::class,
    ]);

    Route::controller(DonationController::class)->group(function () {
        Route::delete('donation-file/{fileId}', 'deleteDonationFile')->name('donations.file.delete');
        Route::get('donation-file/{fileId}', 'makeFeatureFile')->name('donations.file.feature');
    });
    Route::controller(WishController::class)->group(function () {
        Route::delete('wish-file/{fileId}', 'deleteWishFile')->name('wishes.file.delete');
        Route::get('wish-file/{fileId}', 'makeFeatureFile')->name('wishes.file.feature');
        Route::get('wish-fulfill', 'wishList')->name('wish.fulfill.list');
        Route::get('wish-fulfill/{wishId}', 'wishDetail')->name('wish.fulfill.detail');
        Route::post('wish-fulfill', 'storeWishFulfilInfo')->name('wish.fulfill.store');
        Route::get('wish-fulfill-status', 'updateWishFulfilStatus')->name('wish.fulfill.status.change');
        //Route::post('wish-fulfill-status', 'updateWishFulfilStatus')->name('wish.fulfill.status.change');
    });
    Route::get('/categories/{category}/donation-images', [CategoryController::class, 'getDonationImages'])->name('categories.donation-images');
});

require __DIR__.'/auth.php';
