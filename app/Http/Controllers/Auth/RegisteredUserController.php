<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register',[
            'guardianRelations' => CommonHelper::guardianRelations(),
            'genders' => CommonHelper::genders(),
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(StoreUserRequest $request): RedirectResponse
    {
        //dd($request->all());
        // Use a database transaction to ensure both records are created
        //DB::beginTransaction();

        try {
            // Step 1: Handle photo upload if present
            $photoPath = null;
            if ($request->hasFile('photo')) {
                $photoPath = $request->file('photo')->store('photos', 'public');
            }

            // Step 2: Create the user record
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'password' => Hash::make($request->password),
                'user_type' => $request->role,
                'latitude' => $request->latitude,
                'longitude' => $request->longitude,
            ]);

            // Step 3: Create the role-specific record based on user_type
            if ($request->role === 'donor') {
               // dd($request->all());
                $user->donor()->create([
                    'name' => $request->name,
                    'dob' => $request->dob,
                    'address' => $request->address,
                    'organization' => $request->organization,
                    'photo' => $photoPath,
                    'gender' => $request->gender,
                ]);
            } elseif ($request->role === 'wisher') {
                $user->wisher()->create([
                    'name' => $request->name,
                    'dob' => $request->dob,
                    'address' => $request->address,
                    'organization' => $request->organization,
                    'photo' => $photoPath,
                    'gender' => $request->gender,
                    'guardian_name' => $request->guardian_name,
                    'guardian_phone' => $request->guardian_phone,
                    'relationship' => $request->relationship,
                ]);
            } elseif ($request->role === 'leader') {
                $user->leader()->create([
                    'name' => $request->name,
                    'dob' => $request->dob,
                    'address' => $request->address,
                    'organization' => $request->organization,
                    'photo' => $photoPath,
                    'gender' => $request->gender,
                ]);
            }
            // If everything is successful, commit the transaction
            DB::commit();

        event(new Registered($user));
        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
    catch (\Exception $e) {
            // If any part fails, roll back the transaction and return to the form with an error
            DB::rollBack();
            return back()->withErrors(['registration' => 'Registration failed. Please try again.']);
        }
    }
}
