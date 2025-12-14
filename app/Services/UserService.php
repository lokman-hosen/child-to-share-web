<?php

namespace App\Services;

use App\Models\Donation;
use App\Models\File;
use App\Models\Organization;
use App\Models\User;
use App\Models\Wish;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
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
}
