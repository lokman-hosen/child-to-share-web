<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

class Wish extends Model
{
    /** @use HasFactory<\Database\Factories\WishFactory> */
    use HasFactory;
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

//    protected $casts = [
//        'auto_tags' => 'array',
//    ];
    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Carbon::parse($value)->diffForHumans(),
        );
    }
    protected function status(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Str::ucfirst($value),
        );
    }

    /**
     * Get all of the donation's media.
     */
    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }

    /**
     * Get the user that owns the donation.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the organization that owns the donation.
     */
    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    /**
     * Get the category that owns the donation.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }


    /**
     * Get the featured image for the donation.
     */
    public function featuredImage(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')
            ->where('is_featured', true);
    }

    /**
     * Get all images for the donation.
     */
    public function images(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')
            ->where('file_type', 'image');
    }

    /**
     * Get all videos for the donation.
     */
    public function videos(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')
            ->where('file_type', 'video');
    }

    public function createBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
