<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    protected $guarded = ['id'];
    use SoftDeletes;

    /**
     * Get the parent fileable model (Donation, Wish, etc.)
     */
    public function fileable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Get the donation that owns this file (if fileable is a Donation)
     */
    public function donation(): BelongsTo
    {
        return $this->belongsTo(Donation::class, 'fileable_id')
            ->where('fileable_type', Donation::class);
    }

    /**
     * Scope to get only donation files
     */
    public function scopeDonationFiles($query)
    {
        return $query->where('fileable_type', Donation::class);
    }

    /**
     * Scope to get only wish files
     */
    public function scopeWishFiles($query)
    {
        return $query->where('fileable_type', Wish::class);
    }

    /**
     * Scope to get only image files
     */
    public function scopeImages($query)
    {
        return $query->where('file_type', 'image');
    }

    /**
     * Scope to get only video files
     */
    public function scopeVideos($query)
    {
        return $query->where('file_type', 'video');
    }

    /**
     * Get the URL for the file
     */
    public function getUrlAttribute()
    {
        return Storage::url($this->file_path);
    }

    /**
     * Check if the file belongs to a donation
     */
    public function getIsDonationFileAttribute(): bool
    {
        return $this->fileable_type === Donation::class;
    }

    /**
     * Check if the file belongs to a wish
     */
    public function getIsWishFileAttribute(): bool
    {
        return $this->fileable_type === Wish::class;
    }
}
