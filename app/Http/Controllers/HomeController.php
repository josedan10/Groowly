<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    // This render the frontend views
    public function view($page){
        switch ($page) {
            case '/':
                echo('Bienvenido');
                break;
            
            case '/Community':
                echo('Conoce nuestra comunidad');
                break;

            case '/Services':
                echo('Contrata nuestros servicios');
                break;

            case '/Works':
                echo('nuestro portafolio');
                break;
            
            case '/Clients':
                echo('Quienes han confiado en nosotros');
                break;

            case '/Team':
                echo('Nuestro equipo');
                break;

            case '/Contact':
                echo('Contáctanos');
                break;
        }
    }
}
