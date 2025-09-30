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


}
