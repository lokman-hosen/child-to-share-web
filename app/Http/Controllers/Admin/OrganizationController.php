<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrganizationRequest;
use App\Http\Requests\UpdateOrganizationRequest;
use App\Models\Organization;
use App\Services\OrganizationService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrganizationController extends Controller
{
    const moduleDirectory = 'Admin/Organization/';
    const moduleName = 'Organization List';

    public function __construct(
        protected OrganizationService $organizationService,

    ){}

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        if (checkAdmin()){
            $organizations = $this->organizationService->getListWithFilter($request);
            return Inertia::render(self::moduleDirectory.'List', [
                'module' => self::moduleName,
                'organizations' => $organizations,
            ]);
        }else{
            return Inertia::render(self::moduleDirectory.'Index', [
                'module' => self::moduleName,
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(self::moduleDirectory.'Create', [
            'module' => self::moduleName,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOrganizationRequest $request)
    {
        $organization = $this->organizationService->createOrganization($request);
        if ($organization){
            return redirect()->route('organizations.index')->with('success', 'Organization created successfully!');
        }
        return redirect()->route('organizations.index')->with('error', 'Error to created organization');
    }

    /**
     * Display the specified resource.
     */
    //public function show(Organization $organization): Response
    public function show(string $id): Response
    {
        return Inertia::render(self::moduleDirectory.'View', [
            'module' => self::moduleName,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOrganizationRequest $request, Organization $organization)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        //
    }
}
