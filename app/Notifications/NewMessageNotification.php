<?php

namespace App\Notifications;

use App\Models\Message;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class NewMessageNotification extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected Message $fulfilMessage
    ) {}

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
            'title' => 'New message from '.$this->fulfilMessage->sender->name,
            'message' => $this->fulfilMessage->message ?? 'Sent you an attachment',
            'fulfilment_id' => $this->fulfilMessage->fulfilment_id,
            'wish_id' => $this->fulfilMessage->wish_id ?? null,
            'sender_id' => $this->fulfilMessage->sender_id ?? null,
            'sender_name' => $this->fulfilMessage->sender->name ?? null,
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
            ->greeting('Hello ' . $notifiable->name)
            ->line('You have received a new message regarding your wish.')
            ->line($this->fulfilMessage->message ?? 'The donor sent you an attachment.')
            ->action(
                'Open Chat',
                route('wish.fulfill.status.change', $this->fulfilMessage->fulfilment_id)
            )
            ->line('Thank you for using ThreeWish.');
    }
}
