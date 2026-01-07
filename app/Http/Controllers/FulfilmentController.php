<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFulfilmentRequest;
use App\Http\Requests\UpdateFulfilmentRequest;
use App\Models\Fulfillment;
use App\Services\FulfillmentService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class FulfilmentController extends Controller
{
    public function __construct(
        protected FulfillmentService $fulfillmentService,

    ){}
    const moduleDirectory = 'Fulfillment/';
    const moduleName = 'Wish Fulfill List';
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $fulfillList = $this->fulfillmentService->getListByStatus($request, 'completed');

        return Inertia::render(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
            'fulfillList' => $fulfillList,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFulfilmentRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Fulfillment $fulfillment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fulfillment $fulfillment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFulfilmentRequest $request, Fulfillment $fulfillment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fulfillment $fulfillment)
    {
        //
    }
}
