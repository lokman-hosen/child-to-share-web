<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];
    protected $table = ['media'];

//    protected $casts = [
//        'is_featured' => 'boolean',
//        'file_size' => 'integer',
//    ];

    /**
     * Get the parent mediable model (donation, user, etc.).
     */
//    public function mediable(): MorphTo
//    {
//        return $this->morphTo();
//    }

    /**
     * Get the full URL to the media file.
     */
//    public function getUrlAttribute(): string
//    {
//        return Storage::url($this->file_path);
//    }

    /**
     * Get the full path to the media file.
     */
//    public function getFullPathAttribute(): string
//    {
//        return Storage::path($this->file_path);
//    }

}
