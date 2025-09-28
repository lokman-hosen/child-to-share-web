<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

function checkAdmin(): bool
{
    if (Auth::check()){
        return in_array(Auth::user()->getRawOriginal('role'), ['super_admin', 'admin']);
    }else{
        return false;
    }
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
