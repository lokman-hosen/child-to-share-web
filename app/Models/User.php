<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Carbon;


class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, SoftDeletes;
    protected $guarded = ['id'];

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
//    protected $fillable = [
//        'name',
//        'email',
//        'password',
//    ];
    protected $appends = ['role','user_type'];

    /** Never sent to anyone except admins, the user and their own organization. */
    public const RESTRICTED_FIELDS = ['dob', 'guardian_name', 'guardian_phone', 'relationship'];

    /** Additionally withheld from visitors who are not logged in. */
    public const GUEST_HIDDEN_FIELDS = ['email', 'phone', 'email_verified_at', 'phone_verified_at'];

    /** Viewer context, worked out once per authenticated user (avoids a roles query per serialized user). */
    private static array $viewerCache = [];

    /**
     * Strip personal fields depending on who is looking. Inertia serializes every
     * nested user (wish.user, donations.*.user, …) through here, so this one rule
     * covers all pages.
     */
    public function toArray(): array
    {
        $data = parent::toArray();
        $viewer = auth()->user();

        if (! $viewer) {
            return array_diff_key($data, array_flip([...self::RESTRICTED_FIELDS, ...self::GUEST_HIDDEN_FIELDS]));
        }
        if ($viewer->id == $this->id) {
            return $data;
        }

        $ctx = self::$viewerCache[$viewer->id] ??= [
            'admin' => in_array($viewer->role, ['admin', 'super-admin'], true),
            'orgId' => $viewer->user_type === 'organization' ? $viewer->organization_id : null,
        ];
        if ($ctx['admin'] || ($ctx['orgId'] && $this->organization_id == $ctx['orgId'])) {
            return $data;
        }

        return array_diff_key($data, array_flip(self::RESTRICTED_FIELDS));
    }


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'latitude',
        'longitude',
        'deleted_at',
    ];

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->format('F jS, Y'),
        );
    }

    protected function userType(): Attribute
    {
        return Attribute::get(function () {
            if ($this->organization){
                if ($this->id == $this->organization->user_id){
                    return 'organization';
                }else{
                    return 'user';
                }
            }
            return 'user';
        });
    }

    protected function role(): Attribute
    {
        return Attribute::get(function () {
            $roles = $this->roles->pluck('slug');
            if ($roles->contains('donor') and $roles->contains('wisher')){
                return 'donor-wisher';
            }elseif ($roles->contains('donor')){
                return 'donor';
            }elseif ($roles->contains('wisher')){
                return 'wisher';
            }elseif ($roles->contains('admin')){
                return 'admin';
            }elseif ($roles->contains('super-admin')){
                return 'super-admin';
            }
            return 'user';
        });
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Find user by email or phone for authentication
     */
    public function findForPassport($login)
    {
        return $this->where('email', $login)
            ->orWhere('phone', $login)
            ->first();
    }
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }

//    public function organizations(): BelongsToMany
//    {
//        return $this->belongsToMany(Organization::class);
//    }
    public function organization(): HasOne
    {
        return $this->hasOne(Organization::class);
    }

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }

    public function wishes(): HasMany
    {
        return $this->hasMany(Wish::class);
    }
}
