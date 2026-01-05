<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ItemReceivedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public $fulfillment, public $comment)
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['database', 'mail'];
    }

    /**
     * Database payload (stored in notifications. Data)
     */
    public function toDatabase($notifiable): array
    {
        return [
            'type' => 'item_receive_confirmed',
            'title' => 'Wisher/Guardian confirmed receipt — Wish completed',
            'message' => $this->comment,
            'fulfillment_id' => $this->fulfillment->id,
            'wish_id' => $this->fulfillment->wish_id,
            'donation_id' => $this->fulfillment->donation_id,
        ];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Wish Completed — Item Successfully Received')
            ->greeting('Hello ' . $this->fulfillment->donation->user->name . ',')
            ->line('We are happy to inform you that your donated item has been successfully received.')
            ->line('Receipt confirmed by: ' . $this->fulfillment->wish->user->name)
            ->line('Message from the recipient:')
            ->line($this->comment)
            ->action(
                'View Fulfillment Details',
                route(
                    'wish.fulfill.status.change',
                    ['fulfilment_id' => $this->fulfillment->id]
                )
            )
            ->line('Thank you for your generous contribution and for making a meaningful difference!');
    }

}
