<?php

namespace App\Services;

use App\Actions\FileSizes;
use App\Models\Donation;
use App\Models\File;
use App\Models\Organization;
use App\Models\User;
use App\Models\Wish;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class
UserService extends BaseService
{
    public function __construct(
        protected User $user,
    ){
        $this->model = $this->user;
    }

    public function getListWithFilter($request)
    {
        $sortColumn = $request->input('sort', 'created_at');
        $sortDirection = $request->input('direction', 'desc');
        $searchName = $request->input('search_name');
        $filterStatus = $request->input('filter_status');
        // Keep query parameters when paginating
        $query = $this->user->load('organization')->query();
        if (Auth::user()?->user_type == 'organization') {
            $query->where('organization_id', Auth::user()?->organization_id);
        }

        return $query->when($searchName, function ($query, $searchName) {
            $query->where('name', 'like', '%' . $searchName . '%');
        })
            ->when($filterStatus, function ($query, $filterStatus) {
                $query->where('status', $filterStatus);
            })
            ->orderBy($sortColumn, $sortDirection)
            ->paginate(10) // Pagination: 10 items per page
            ->withQueryString();
    }

    public function saveUser($request)
    {
        $photoPath = null;
        if ($request->hasFile('photo')) {
            $imageFile = $request->file('photo');
            $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'store', null);
        }

        $organization = null;
        if (Auth::user()->user_type == 'organization') {
            $organization = Auth::user()->organization;
        }

        $user = $this->user->create([
            'name' => $request->name,
            'email' => checkEmpty($request->email),
            'phone' => checkEmpty($request->phone),
            'image' => $photoPath,
            'dob' => $request->dob,
            'gender' => $request->gender,
            'latitude' => checkEmpty($request->latitude),
            'longitude' => checkEmpty($request->longitude),
            'address' => checkEmpty($request->address),
            'guardian_name' => checkEmpty($request->guardian_name),
            'guardian_phone' => checkEmpty($request->guardian_phone),
            'relationship' => checkEmpty($request->relationship),
            'organization_id' => $organization ? $organization->id : null,
            'is_verified' => true,
            'is_active' => true,
            'password' => Hash::make('12345Uihp'),
        ]);

        // assign role
        if ($user){
            $user->roles()->attach([3,4]);
        }
        return $user;

    }
}
