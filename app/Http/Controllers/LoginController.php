<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{

    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    
    public function view() {
        return view('admin/login');
    }

    public function login(Request $req) {
        // dd('hola');
        $user = $req->only('username', 'password');

        if (Auth::attempt($user, true)) {
            // Authentication passed...
            // dd('valido');

            
            return redirect('admin');
        }
    }
}
