<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserDataRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    const moduleDirectory = 'Admin/User/';
    const moduleName = 'User';

    public function __construct(
        protected UserService $userService,

    ){}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $users = $this->userService->getListWithFilter($request);
        return inertia(self::moduleDirectory.'Index', [
            'module' => self::moduleName,
            'users' => $users
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render(self::moduleDirectory.'Create',[
            'module' => self::moduleName,
            'genders' => CommonHelper::genders(),
            'guardianRelations' => CommonHelper::guardianRelations(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserDataRequest $request)
    {
        $user = $this->userService->saveUser($request);
        if ($user){
            return redirect()->route('users.index')->with('success', 'User created successfully!');
        }
        return redirect()->route('users.index')->with('error', 'Error to created wish');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
