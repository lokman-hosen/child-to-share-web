<?php

namespace App\Services;

use App\Models\Category;
use Illuminate\Support\Str;

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
        $searchCommon = $request->input('search_common');
        // Keep query parameters when paginating
        $query = $this->category;
        if ($request->filled('status')) {
            if ($request->status == 1){
                $query = $query->where('is_active', 1);
            }else{
                $query = $query->where('is_active', 0);
            }
        }
        return $query->withCount('wishes', 'donations')
            ->when($searchCommon, function ($query, $searchName) {
                $query->where('name', 'like', '%' . $searchName . '%')
                    ->where('slug', 'like', '%' . $searchName . '%');
            })
            ->orderBy($sortColumn, $sortDirection)
            ->paginate(10) // Pagination: 10 items per page
            ->withQueryString();
    }


    public function getAll()
    {
        return $this->category->orderBy('name')->get(['id', 'name']);

    }

    public function findByName($name)
    {
        $category = $this->category->where('name', 'like', '%' . $name . '%')->first();
        if (!isset($category)) {
            $category = $this->category->create([
                'name' => $name,
                'slug' => Str::slug($name),
                'icon' => null,
                'order' => 14,
            ]);
        }
        return $category;
    }

    public function getList()
    {
        return $this->category->where('is_active',true)->withCount('wishes')->orderBy('name')->get(['id', 'name']);
    }
}
