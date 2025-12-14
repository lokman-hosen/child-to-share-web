<?php

namespace App\Http\Controllers\Auth;

use App\Actions\FileSizes;
use App\Helpers\CommonHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use App\Services\OrganizationService;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Intervention\Image\Facades\Image;

class RegisteredUserController extends Controller
{
    const filePath = 'photos';
    const fileSize = ['width' => 400, 'height' => 300];
    public function __construct(
        protected OrganizationService $organizationService,

    ){}
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        //$organizations =  $this->organizationService->listByStatus();
        return Inertia::render('Auth/Register',[
            //'guardianRelations' => CommonHelper::guardianRelations(),
            'genders' => CommonHelper::genders(),
            //'organizations' => $organizations
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

        //try {
            // Step 1: Handle photo upload if present
            $photoPath = null;
            if ($request->hasFile('photo')) {
                $imageFile = $request->file('photo');
                $photoPath = uploadImage($imageFile, FileSizes::PROFILE_IMAGE,'store', null);
            }
//            $organization = null;
//            if ($request->filled('organization')) {
//                $organization = $this->organizationService->findByName($request->organization);
//            }

            // Step 2: Create the user record
            $user = User::create([
                'name' => $request->name,
                'email' => checkEmpty($request->email),
                'phone' => $request->phone,
                'image' => $photoPath,
                'dob' => $request->dob,
                'gender' => $request->gender ?? 'other',
                'latitude' => checkEmpty($request->latitude),
                'longitude' => checkEmpty($request->longitude),
                'address' => checkEmpty($request->address),
                //'be_leader' => $request->be_leader,
                'is_verified' => true,
                'is_active' => true,
                'password' => Hash::make($request->password),
            ]);
            // assign role
            if ($user){
                $user->roles()->attach([3,4]);
            }
            // save organization info
            if ($request->user_type == 'organization' and $user){
                $organization = $user->organization()->create([
                    'name' => $user->name,
                    'contact_email' => checkEmpty($user->email),
                    'contact_phone' => $user->phone,
                    'address' => $request->address,
                    'user_id' => $user->id,
                ]);
                if ($organization){
                    $user->update(['organization_id' => $organization->id]);
                }
            }

            // tah organization
//            if (isset($organization) and $user){
//                $user->organizations()->attach([$organization->id]);
//            }

            // Step 3: Create the role-specific record based on role
//            if ($request->role === 'donor') {
//                $user->donor()->create([
//                    'name' => $request->name,
//                    'guardian_name' => checkEmpty($request->guardian_name),
//                    'guardian_phone' => checkEmpty($request->guardian_phone),
//                    'relationship' => checkEmpty($request->relationship),
//                    'dob' => $request->dob,
//                    'gender' => $request->gender,
//                ]);
//            } elseif ($request->role === 'wisher') {
//                $user->wisher()->create([
//                    'name' => $request->name,
//                    'guardian_name' => checkEmpty($request->guardian_name),
//                    'guardian_phone' => checkEmpty($request->guardian_phone),
//                    'relationship' => checkEmpty($request->relationship),
//                    'dob' => $request->dob,
//                    'gender' => $request->gender,
//                ]);
//            } elseif ($request->role === 'leader') {
//                $user->leader()->create([
//                    'name' => $request->name,
//                    'dob' => $request->dob,
//                    'gender' => $request->gender,
//                ]);
//            }
            // If everything is successful, commit the transaction
            //DB::commit();

        event(new Registered($user));
        Auth::login($user);
        return redirect()->intended(route('home', absolute: false));
//        if ($user->role === 'donor'){
//            return redirect()->intended(route('donation.index', absolute: false));
//        }elseif ($user->role === 'wisher'){
//            return redirect()->intended(route('wish.index', absolute: false));
//        } else{
//            return redirect(route('dashboard', absolute: false));
//        }
//    }
//    catch (\Exception $e) {
//            // If any part fails, roll back the transaction and return to the form with an error
//            DB::rollBack();
//            return back()->withErrors(['registration' => 'Registration failed. Please try again.']);
//        }
    }
}
