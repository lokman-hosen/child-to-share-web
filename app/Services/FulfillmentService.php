<?php

namespace App\Services;

use App\Models\Fulfillment;
use Illuminate\Pagination\LengthAwarePaginator;

class FulfillmentService extends BaseService
{
    public function __construct(
        protected Fulfillment $fulfillment,
    ){}

    public function getListByStatus($request, string $status): LengthAwarePaginator
    {
        $query = $this->fulfillment->with(['wish', 'wish.user', 'donation', 'donation.featuredImage', 'donation.user']);
        if (isset($status)) {
            $query->where('status', $status);
        }
        if ($request->filled('category_id')) {
            $query->where('category_id', $request->category_id);
        }
        return $query->orderBy('created_at', 'desc')->paginate(12)->withQueryString();
    }


}
