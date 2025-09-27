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
function checkMember(): bool
{
    if (Auth::check()){
        return Auth::user()->getRawOriginal('role') == 'member';
    }else{
        return false;
    }
}
function checkEmpty($value){
    return isset($value) ? (!empty($value) ? $value : null) : null;
}
function getFileRealPath(?string $filePath): string
{
    return Str::after($filePath, 'storage/');
}
