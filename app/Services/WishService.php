<?php

namespace App\Services;

use App\Models\Donation;
use App\Models\Organization;
use App\Models\Wish;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Auth;

class WishService extends BaseService
{
    public function __construct(
        protected Wish $wish,
    ){
        $this->model = $this->wish;
    }
    public function donationByStatus($status = null, $resource = 'list', $limit = null, $for = 'frontend'): Collection|int
    {
        $query = $this->wish->with(['user', 'category', 'files', 'featuredImage']);
        if ($for === 'admin') {
            if (checkWisher()){
                $query->where('user_id', Auth::id());
            }
        }
        if (isset($status)) {
            $query->where('status', $status);
        }
        if (isset($limit)) {
            $query->limit($limit);
        }
        return $resource === 'count' ? $query->count() :  $query->get();
    }
}
