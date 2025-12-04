<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Fulfillment extends Model
{
    /** @use HasFactory<\Database\Factories\FulfillmentFactory> */
    use HasFactory,SoftDeletes;

    protected $guarded = ['id'];

    protected function scheduledAt(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => Carbon::parse($value)->format('Y-m-d H:i:s'),
        );
    }

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
