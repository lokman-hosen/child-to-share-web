<?php

namespace App\Services;

use App\Models\Organization;
use Illuminate\Support\Facades\Auth;

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

    public function findByName(string $name)
    {
       $organization = $this->organization->where('name', 'like', '%' . $name . '%')->first();
       if (!isset($organization)) {
           $organization = $this->organization->create([
               'name' => $name,
           ]);
       }
       return $organization;
    }

}
