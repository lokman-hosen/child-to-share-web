<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

//Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
//    return (int) $user->id === (int) $id;
//});

Broadcast::channel('fulfilment.{fulfilmentId}', function ($user, $fulfilmentId) {
    return \App\Models\Fulfillment::where('id', $fulfilmentId)
        ->whereHas('wish', fn ($q) => $q->where('user_id', $user->id))
        ->orWhereHas('donation', fn ($q) => $q->where('user_id', $user->id))
        ->exists();
});

