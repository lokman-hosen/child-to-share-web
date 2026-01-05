<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WishFulfilRequestedNotification extends Notification
{
    use Queueable;


    public function __construct(public $fulfilment){}

    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    public function toDatabase($notifiable)
    {
        return [
            'title' => 'New Wish Fulfillment Request',
            'message' => 'A donor is interested in fulfilling wish: ' . $this->fulfilment->wish->title,
            'fulfilment_id' => $this->fulfilment->id,
            'wish_id' => $this->fulfilment->wish_id,
            'donor_id' => $this->fulfilment->donation->user_id,
            'type' => 'wish_fulfill_request',
        ];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Wish Fulfillment Request')
            ->greeting('Hello,')
            ->line('A donor is interested in fulfilling your wish.')
            ->line('Please log in to your dashboard to review and accept the request.')
            ->line('Donor Name: ' . $this->fulfilment->donor->user->name)
            ->action(
                'View Fulfillment Request',
                route('dashboard')
            )
            ->line('Thank you.');
    }

}
