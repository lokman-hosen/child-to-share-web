<?php

namespace App\Notifications;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewMessageNotification extends Notification
{
    use Queueable;

    public function __construct(public $fulfilMessage) {
        //dd($this->fulfilMessage);
    }

    /**
     * Notification channels
     */
    public function via($notifiable)
    {
        return ['database', 'mail'];
        //return ['database'];
    }

    /**
     * Save to notifications table
     */
    public function toDatabase($notifiable)
    {

        return [
            'title' => 'New message from '.$this->fulfilMessage->sender->name,
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
            ->subject('New message regarding your wish')
            ->greeting('Hello ' . $this->fulfilMessage?->receiver->name ?? null)
            ->line('You have received a new message regarding wish.')
            ->line($this->fulfilMessage->message ?? 'The donor sent you an attachment.')
            ->action(
                'Open Chat',
                route('wish.fulfill.status.change', ['fulfilment_id' => $this->fulfilMessage->fulfillment_id])
            )
            ->line('Thank you for using ThreeWish.');
    }
}
