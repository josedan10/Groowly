<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;

class ContactController extends Controller
{
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function sendMessage(Request $request)
    {
        // Send mail to contacto@groowly.com

        // $user = array(
        //     'name' => $request->name,
        //     'email' => $request->email,
        //     'phone' => $request->phone,
        //     'address' => $request->address,
        //     'comment' => $request->comment
        // );

        // $user = array(
        //     'name' => 'Jose Daniel',
        //     'email' => 'josedanq100@gmail.com',
        //     'phone' => '+584167278362',
        //     'address' => 'Mi casa',
        //     'comment' => 'Quiero una pagina web'
        // );

        // Mail::to('josedanq100@gmail.com')->send(new ContactMail($user));    
        
        $to = "contacto@groowly.com";
        $subject = "HTML email";

        $message = "
        <html>
        <head>
        <title>HTML email</title>
        </head>
        <body>
        <h1>Contacto recibido</h1>
        <p><b>Nombre: </b>".$request->name."</p>
        <p><b>Address: </b>".$request->address."</p>
        <p><b>Tlf: </b>".$request->phone."</p>
        <p><b>Comentario: </b>".$request->comment."</p>
        </body>
        </html>
        ";

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: '.$request->email . "\r\n";
        $headers .= 'Cc: '.$request->email . "\r\n";

        mail($to,$subject,$message,$headers);

        $request->session()->flash('status', '¡Mensaje enviado!');

        return redirect('/Contact');
    }

   
}
