<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class DeliveryAttemptNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public $fulfillment)
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

    public function toDatabase($notifiable)
    {
        return [
            'title' => 'Item Marked as Delivered — Please Confirm Receipt',
            'message' => 'Please review the item and confirm that you have received it.',
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
            ->subject('Item Marked as Delivered — Please Confirm Receipt')
            ->greeting('Hello!')
            ->line('The donor has marked the item as delivered.')
            ->line('Please review the item and confirm that you have received it.')
            ->action(
                'Confirm Receipt',
                route(
                    'wish.fulfill.status.change',
                    ['fulfilment_id' => $this->fulfillment->id]
                )
            )
            ->line('Thank you for your cooperation.');
    }


    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
