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
            'title' => 'Issue Reported — Action Required',
            'message' => $this->comment,
            'fulfillment_id' => $this->fulfillment->id,
            'reported_by' => $this->fulfillment->wish->user_id,
            'type' => 'issue_reported',
        ];
    }

    /**
     * Email notification (only if the receiver is offline)
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Issue Reported — Action Required')
            ->greeting('Hello ' . $this->fulfillment->donation->user->name . ',')
            ->line('An issue has been reported regarding a wish fulfillment.')
            ->line('Reported by: ' . $this->fulfillment->wish->user->name)
            ->line('Issue details:')
            ->line($this->comment)
            ->action(
                'View Fulfillment Details',
                route(
                    'wish.fulfill.status.change',
                    ['fulfilment_id' => $this->fulfillment->id]
                )
            )
            ->line('Please review the issue and take the necessary action at your earliest convenience.');
    }

}
