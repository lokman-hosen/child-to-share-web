<?php

namespace App\Services;

use App\Models\Organization;

class OrganizationService extends BaseService
{
    public function __construct(
        protected Organization $organization,
    ){
        $this->model = $this->organization;
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
