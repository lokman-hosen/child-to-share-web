<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Fulfillment extends Model
{
    /** @use HasFactory<\Database\Factories\FulfillmentFactory> */
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];

    public function task()
    {
        return $this->hasOne(Task::class, 'fulfillment_id');
    }

    public function wish()
    {
        return $this->belongsTo(Wish::class);
    }

    public function donation()
    {
        return $this->belongsTo(Donation::class);
    }

}
