<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;


function uploadImage($file, $fileProperty, $actionType, $oldFileName): string
{
    $fileName = time() . '.' . $file->getClientOriginalExtension();
    $filePath = $fileProperty['path'] . '/' . $fileName;

    if ($actionType === 'update') {
        Storage::disk('public')->delete($oldFileName);
    }

    $img = Image::make($file->getRealPath());

    $originalWidth  = $img->width();
    $originalHeight = $img->height();

    $targetWidth  = $fileProperty['width'];
    $targetHeight = $fileProperty['height'];

    // Difference calculation
    $widthDiff  = abs($originalWidth - $targetWidth);
    $heightDiff = abs($originalHeight - $targetHeight);

    /**
     * Logic:
     * - If difference is small → normal resize (keeps more of image)
     * - If difference is large → use fit (best quality, balanced crop)
     */
    if ($widthDiff <= 200 && $heightDiff <= 200) {

        // ➤ Small difference → normal resize with aspect ratio
        $img->resize($targetWidth, $targetHeight, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

    } else {

        // ➤ Large difference → smart crop using fit() for best clarity
        $img->fit($targetWidth, $targetHeight);

    }

    // Save with optimized quality
    Storage::disk('public')->put($filePath, $img->encode('jpg', 92));

    return $filePath;
}

function checkAdmin(): bool
{
    if (Auth::check()){
        return in_array(Auth::user()->role, ['super-admin', 'admin']);
    }else{
        return false;
    }
}

function checkDonor(): bool
{
    if (Auth::check()){
        return Auth::user()->role === 'donor';
    }
    return false;
}
function checkWisher(): bool
{
    if (Auth::check()){
        return Auth::user()->role === 'wisher';
    }
    return false;
}
function checkDonorWisher(): bool
{
    if (Auth::check()){
        return Auth::user()->role === 'donor-wisher';
    }
    return false;
}

function donationStatus(): array
{
    return ['available' => 'Available', 'donated' => 'Donated', 'reserved' => 'Reserved'];
}

function checkEmpty($value){
    return isset($value) ? (!empty($value) ? $value : null) : null;
}
function getFileRealPath(?string $filePath): string
{
    return Str::after($filePath, 'storage/');
}

function wishStatus(): array
{
    return ['pending' => 'Pending', 'approved' => 'Approved', 'fulfilled' => 'Fulfilled', 'cancelled' => 'Cancelled'];
}

function ageRanges(): array
{
    return [
        '0-2' => '0 - 2 years',
        '3-5' => '3 - 5 years',
        '6-8' => '6 - 8 years',
        '9-11' => '9 - 11 years',
        '12-14' => '12 - 14 years',
        '15-18' => '15 - 18 years',
    ];
}

function distanceRanges(): array
{
    return [
        '0-10' => '0 - 10 km',
        '11-20' => '11 - 20 km',
        '21-30' => '21 - 30 km',
        '31-40' => '31 - 40 km',
        '41-50' => '41 - 50 km',
        '51-60' => '51 - 60 km',
        '61-70' => '61 - 70 km',
        '71-80' => '71 - 80 km',
        '81-90' => '81 - 90 km',
        '91-100' => '91 - 100 km',
    ];
}

function stringLimit(string $string, int $limit): string
{
   return Str::of($string)->limit($limit, preserveWords: true);
}



