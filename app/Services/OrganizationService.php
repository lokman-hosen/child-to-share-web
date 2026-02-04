<?php

namespace App\Services;

use App\Actions\FileSizes;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class OrganizationService extends BaseService
{
    public function __construct(
        protected Organization $organization,
    ){
        $this->model = $this->organization;
    }


    public function getListWithFilter($request)
    {
        $sortColumn = $request->input('sort', 'created_at');
        $sortDirection = $request->input('direction', 'desc');
        $searchName = $request->input('search_name');
        $filterStatus = $request->input('filter_status');
        // Keep query parameters when paginating
        $query = $this->organization;

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

    public function createOrganization($request)
    {
        // Handle file uploads
        $photoPath = null;
        if ($request->hasFile('image')) {
            $imageFile = $request->file('image');
            $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'store', null);
        }

        // Step 2: Create the user record
        $user = User::create([
            'name' => $request->name,
            'email' => checkEmpty($request->contact_email),
            'phone' => $request->contact_phone,
            'image' => $photoPath,
            'dob' => now()->subYear(10),
            'gender' => 'other',
            'latitude' => checkEmpty($request->latitude),
            'longitude' => checkEmpty($request->longitude),
            'address' => checkEmpty($request->address),
            'is_verified' => true,
            'is_active' => true,
            'password' => Hash::make('12345678'),
        ]);

        $organization = $user->organization()->create([
            'name' => $user->name,
            'contact_email' => checkEmpty($user->phone),
            'contact_phone' => $user->phone,
            'description' => checkEmpty($request->description),
            'address' => $request->address,
            'user_id' => $user->id,
        ]);
        if ($organization){
            $user->update(['organization_id' => $organization->id]);
        }

        return $organization;
    }

    public function updateOrganization($request, $organization)
    {
        $oldOrganization = $organization;
        // Handle file uploads
        $photoPath = $organization->user->image;
        if ($request->hasFile('image')) {
            $imageFile = $request->file('image');
            if ($organization->user->image && Storage::disk('public')->exists($organization->user->image)){
                $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'update', $organization->user->image);
            }else{
                $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'store', null);
            }
        }

        $organization->user->update([
            'name' => $request->name,
            'email' => $request->contact_email,
            'phone' => $request->contact_phone,
            'image' => $photoPath,
            'latitude' => checkEmpty($request->latitude),
            'longitude' => checkEmpty($request->longitude),
            'address' => checkEmpty($request->address),
        ]);

        $oldOrganization->update([
            'name' => $request->name,
            'contact_email' => checkEmpty($request->contact_email),
            'contact_phone' => $request->contact_phone,
            'description' => checkEmpty($request->description),
            'address' => $request->address,
        ]);

        return $organization;
    }

    public function findByName(string $name)
    {
       $organization = $this->organization->where('name', 'like', '%' . $name . '%')->first();
       if (!isset($organization)) {
           $organization = $this->organization->create([
               'name' => $name,
               'is_active' => 0,
           ]);
       }
       return $organization;
    }

    public function organizationList()
    {
        return $this->organization->with(['user' => function ($query) {
            $query->withCount(['wishes', 'donations']);
        }])
            ->where('is_active', true)
            ->orderBy('name')
            ->get()
            ->map(function ($organization) {
                // Sum wish counts from all users in the organization
                $organization->total_wishes_count = $organization->user ?
                    $organization->user->wishes_count : 0;
                // Sum donation counts from all users in the organization
                $organization->total_donations_count = $organization->user ?
                    $organization->user->donations_count : 0;
                return $organization;
            });
    }

}
