<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ModerationLog extends Model
{
    /** @use HasFactory<\Database\Factories\ModerationLogFactory> */
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];
}
