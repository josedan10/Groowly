<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Home;

class AdminController extends Controller
{
    //

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function home() {
        $home = Home::find(1);

        // dd($home);

        return view('admin.home.list', ['home' => $home]);
    }

    public function editHome() {
        $home = Home::find(1);

        return view('admin.home.edit', ['home' => $home]);
    }

    public function editHomeAction(Request $request) 
    {
        $home = Home::find(1);
        
        if (!$home) {
            // Edit
            $home = new Home();
        }

        $home->name = $request->name;
        $home->title = $request->title;
        $home->paragraph1 = $request->paragraph1;
        $home->paragraph2 = $request->paragraph2;

        $home->save();

        return redirect(route('admin-home'));

    }
}
