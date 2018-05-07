<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\MarketingRelaciones;

class FrontendController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    	return view('frontend.about');
    }

    public function marketing()
    {
        $marketing = MarketingRelaciones::where('name', 'marketing')->first();

        return view('frontend.marketing', ['marketing' => $marketing]);
    }
}
