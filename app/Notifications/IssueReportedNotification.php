<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class IssueReportedNotification extends Notification
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
            'type' => 'issue_reported',
            'title' => 'New issue reported',
            'message' => $this->comment,
            'fulfillment_id' => $this->fulfillment->id,
            'reported_by' => $this->fulfillment->wish->user_id,
        ];
    }

    /**
     * Email notification (only if the receiver is offline)
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('An issue has been reported')
            ->greeting('Hello ' . $this->fulfillment->donation->user->name . ',')
            ->line('An issue has been reported regarding a wish fulfilment.')
            ->line('Reported by: ' . $this->fulfillment->wish->user->name)
            ->line('Issue: '.$this->comment)
            ->action(
                'View Details',
                route('wish.fulfill.status.change',
                    ['fulfilment_id' => $this->fulfillment->id]
                )
            )
            ->line('Please take action as soon as possible.');
    }
}
