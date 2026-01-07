<?php

use App\Models\Fulfillment;
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

// chatting
Broadcast::channel('fulfillment.{fulfillmentId}', function ($user, $fulfillmentId) {
    return Fulfillment::where('id', $fulfillmentId)
        ->where(function ($q) use ($user) {
            $q->whereHas('wish', fn ($q) => $q->where('user_id', $user->id))
                ->orWhereHas('donation', fn ($q) => $q->where('user_id', $user->id));
        })
        ->exists();
});

// In your presence channel callback
Broadcast::channel('presence-fulfillment.{fulfillmentId}', function ($user, $fulfillmentId) {
    \Log::info('Auth attempt for presence channel', [
        'user_id' => $user->id,
        'fulfillment_id' => $fulfillmentId,
        'session_id' => session()->getId(),
    ]);

    $fulfillment = \App\Models\Fulfillment::find($fulfillmentId);

    if (! $fulfillment) {
        \Log::warning('Fulfillment not found', ['fulfillment_id' => $fulfillmentId]);
        return false;
    }

    if (
        $user->id === $fulfillment->wish->user_id ||
        $user->id === $fulfillment->donation->user_id
    ) {
        \Log::info('Auth successful', ['user_id' => $user->id]);
        return [
            'id'   => $user->id,
            'name' => $user->name,
        ];
    }

    \Log::warning('Auth failed - user not authorized', ['user_id' => $user->id]);
    return false;
});



//Broadcast::channel('presence-fulfillment.{fulfillmentId}', function ($user, $fulfillmentId) {
//    $fulfillment = Fulfillment::find($fulfillmentId);
//    if (! $fulfillment) return false;
//    if (
//        $user->id === $fulfillment->wish->user_id ||
//        $user->id === $fulfillment->donation->user_id
//    ) {
//        // mark user online
//        cache()->put(
//            "user-online-{$user->id}",
//            true,
//            now()->addMinutes(2) // auto-expire if disconnect
//        );
//
//        return [
//            'id'   => $user->id,
//            'name' => $user->name,
//        ];
//    }
//
//    return false;
//});

//Broadcast::channel('fulfillment.{fulfilmentId}', function ($user, $fulfillmentId) {
//
//    $fulfillment = \App\Models\Fulfillment::find($fulfillmentId);
//
//    if (! $fulfillment) {
//        return false;
//    }
//
//    return $user->id === $fulfillment->wish_user_id
//        || $user->id === $fulfillment->donor_user_id;
//});



