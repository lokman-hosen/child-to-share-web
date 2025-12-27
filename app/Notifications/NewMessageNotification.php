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
        protected Message $message
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
            'title' => 'New message from donor',
            'message' => $this->message->text ?? 'Sent you an attachment',
            'fulfilment_id' => $this->message->fulfilment_id,
            'wish_id' => optional($this->message->fulfilment)->wish_id,
            'sender_id' => $this->message->sender_id,
            'sender_name' => optional($this->message->sender)->name,
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
            ->line($this->message->text ?? 'The donor sent you an attachment.')
            ->action(
                'Open Chat',
                route('fulfilments.chat', $this->message->fulfilment_id)
            )
            ->line('Thank you for using ThreeWish.');
    }
}
