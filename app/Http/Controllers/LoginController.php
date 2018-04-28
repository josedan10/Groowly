<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function view() {
        return view('admin/login');
    }

    public function login(Request $req) {
        // dd('hola');
        $user = $req->only('username', 'password');

        if (Auth::attempt($user)) {
            // Authentication passed...
            // dd('valido');
            return view('admin/home', ['admin' => Auth::user()]);
        }

        dd('invalido');
    }
}
