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

    protected function userType(): Attribute
    {
        return Attribute::get(function () {
            if ($this->organization){
                if (($this->phone === $this->organization->contact_phone) and ($this->email === $this->organization->contact_email)){
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
            }
            elseif ($roles->contains('donor')){
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
    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }

    public function donations(): HasMany
    {
        return $this->hasMany(Donation::class);
    }
}
