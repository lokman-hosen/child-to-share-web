<?php

namespace App\Service;

use App\Models\Category;
use App\Services\BaseService;

class CategoryService extends BaseService
{
    public function __construct(
        protected Category $category,
    ){
        $this->model = $category;
    }

    public function getListWithFilter($request)
    {
        $sortColumn = $request->input('sort', 'created_at');
        $sortDirection = $request->input('direction', 'desc');
        $searchName = $request->input('search_name');
        $filterStatus = $request->input('filter_status');
        $filterCreated = $request->input('filter_created_at');
        // Keep query parameters when paginating
        return $this->category->when($searchName, function ($query, $searchName) {
                $query->where('name', 'like', '%' . $searchName . '%');
            })
            ->when($filterCreated, function ($query, $filterCreated) {
                $query->whereDate('created_at', $filterCreated);
            })
            ->when($filterStatus, function ($query, $filterStatus) {
                if ($filterStatus === 'active') {
                    $query->where('status', true);
                } elseif ($filterStatus === 'inactive') {
                    $query->where('status', false);
                }
            })
            ->orderBy($sortColumn, $sortDirection)
            ->paginate(10) // Pagination: 10 items per page
            ->withQueryString();
    }


    public function getAll()
    {
        return $this->category->orderBy('name')->get(['id', 'name']);

    }
}
