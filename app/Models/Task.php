<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    /** @use HasFactory<\Database\Factories\TaskFactory> */
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];

    public function Fulfilment()
    {
        return $this->belongsTo(Fulfilment::class);
    }

    public function assignedAdmin()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
