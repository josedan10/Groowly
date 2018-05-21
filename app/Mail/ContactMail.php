<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        //
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject = 'Nuevo contacto';

        return $this->view('frontend.mail')
                    ->from($this->user['email'], $this->user['name'])
                    ->cc($this->user['email'], $this->user['name'])
                    ->bcc($this->user['email'], $this->user['name'])
                    ->replyTo($this->user['email'], $this->user['name'])
                    ->subject($subject);

    }
}
