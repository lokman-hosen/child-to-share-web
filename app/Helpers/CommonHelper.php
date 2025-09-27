<?php

namespace App\Helpers;

use App\Models\User;

class CommonHelper
{
    public function __construct(protected User $user){}
    public static function isAdmin(User $user): bool
    {
        return in_array($user->role, ['super_admin', 'admin']);
    }

    public static function guardianRelations(): array
    {
        return [
            'parent' => 'Parent',
            'grandparent' => 'Grandparent',
            'sibling' => 'Sibling',
            'uncle' => 'Uncle',
            'aunt' => 'Aunt',
            'legal-guardian' => 'Legal Guardian',
            'other' => 'Other',
        ];
    }
    public static function genders(): array
    {
        return [
            'male' => 'Male',
            'female' => 'Female',
            'other' => 'Other',
        ];
    }
    public static function paymentStatus(): array
    {
        return ['approve' => 'Approve', 'pending' => 'Pending', 'review' => 'Review'];
    }

}
