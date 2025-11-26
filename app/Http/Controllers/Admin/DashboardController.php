<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\DonationService;
use App\Services\WishService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\Facades\Image;
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

        // assign role
//        $users = User::where('id', '>', 2)->get();
//        foreach ($users as $user) {
//            $user->roles()->attach([3,4]);
//        }

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


    public function resizeAllImagesInDirectory(){
        $directory = 'photos'; // Storage directory
        $fileProperty = [
            'width' => 390,
            'height' => 245
        ];

        // Get all files from the photos directory
        $files = Storage::disk('public')->files($directory);

        $imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
        $resizedCount = 0;
        $errors = [];

        foreach ($files as $file) {
            try {
                // Check if file is an image
                $extension = pathinfo($file, PATHINFO_EXTENSION);
                if (!in_array(strtolower($extension), $imageExtensions)) {
                    continue;
                }

                $fullPath = Storage::disk('public')->path($file);

                // Resize the image
                $resized = $this->resizeImageWithApproach3($fullPath, $fileProperty);

                if ($resized) {
                    $resizedCount++;
                    \Log::info("Successfully resized image: {$file}");
                } else {
                    $errors[] = "Failed to resize image: {$file}";
                }

            } catch (\Exception $e) {
                $errors[] = "Error processing {$file}: {$e->getMessage()}";
                \Log::error("Error resizing image {$file}: {$e->getMessage()}");
            }
        }

        return [
            'resized_count' => $resizedCount,
            'error_count' => count($errors),
            'errors' => $errors
        ];
    }

    public function resizeImageWithApproach3($imagePath, $fileProperty)
    {
        $img = Image::make($imagePath);
//        $originalWidth = $img->width();
//        $originalHeight = $img->height();
//
        $targetWidth = $fileProperty['width'];
        $targetHeight = $fileProperty['height'];
//
//        // Calculate aspect ratios
//        $originalAspect = $originalWidth / $originalHeight;
//        $targetAspect = $targetWidth / $targetHeight;
//
//        // If aspect ratios are similar (within 10%), use fit to avoid letterboxing
//        if (abs($originalAspect - $targetAspect) < 0.1) {
//            $img->fit($targetWidth, $targetHeight);
//        } else {
//            // If very different aspect ratios, resize with background
//            $img->resize($targetWidth, $targetHeight, function ($constraint) {
//                $constraint->aspectRatio();
//                $constraint->upsize();
//            });
//
//            $canvas = Image::canvas($targetWidth, $targetHeight, '#f8f9fa'); // Light gray
//            $canvas->insert($img, 'center');
//            $img = $canvas;
//        }

        $img->resize($targetWidth, $targetHeight, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        // Save with optimized quality (overwrite the original file)
        $img->save($imagePath, 90);

        return true;
    }
}
