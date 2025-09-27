<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Wish extends Model
{
    /** @use HasFactory<\Database\Factories\WishFactory> */
    use HasFactory;
    use HasFactory, SoftDeletes;
    protected $guarded = ['id'];

    protected $casts = [
        'auto_tags' => 'array',
    ];
}
