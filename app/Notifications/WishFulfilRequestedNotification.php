<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class WishFulfilRequestedNotification extends Notification
{
    use Queueable;


    public function __construct(public $fulfilment){}

    public function via($notifiable)
    {
        return ['database']; // stored in notifications table
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => 'Donor wants to fulfill your wish',
            'message' => 'A donor has requested to fulfill the wish: ' . $this->fulfilment->wish->title,
            'fulfilment_id' => $this->fulfilment->id,
            'wish_id' => $this->fulfilment->wish_id,
            'donor_id' => $this->fulfilment->donation->user_id,
        ];
    }
}
