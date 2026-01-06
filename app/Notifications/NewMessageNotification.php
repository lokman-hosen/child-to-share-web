<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewMessageNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(public $fulfilMessage) {
        //
    }

    /**
     * Notification channels
     */
    public function via($notifiable)
    {
        return ['database', 'mail'];
    }

    /**
     * Save to notifications table
     */
    public function toDatabase($notifiable)
    {

        return [
            'title' => 'New Message About Your Wish from '.$this->fulfilMessage->sender->name,
            'message' => $this->fulfilMessage->message ?? 'Sent you an attachment',
            'fulfillment_id' => $this->fulfilMessage->fulfillment_id,
            'wish_id' => $this->fulfilMessage->fulfilment->wish_id ?? null,
            'sender_id' => $this->fulfilMessage->sender_id ?? null,
            'sender_name' => $this->fulfilMessage->sender->name ?? null,
            'receiver_id' => $this->fulfilMessage->receiver_id ?? null,
            'receiver_name' => $this->fulfilMessage->receiver->name ?? null,
            'type' => 'chat_message',
        ];
    }

    /**
     * Email notification
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('New Message About Your Wish')
            ->greeting('Hello ' . ($this->fulfilMessage?->receiver->name ?? 'there') . ',')
            ->line('You have received a new message regarding your wish.')
            ->line($this->fulfilMessage->message ?? 'The donor has sent you an attachment.')
            ->action(
                'Open Chat',
                route(
                    'wish.fulfill.status.change',
                    ['fulfilment_id' => $this->fulfilMessage->fulfillment_id]
                )
            )
            ->line('Thank you for being a part of ThreeWish.');
    }

}
