<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Home;
use App\marketingRelaciones;

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

    public function marketing() {
        $marketing = MarketingRelaciones::where('name', 'Marketing')->get();

        return view('admin.marketing.list', ['marketing' => $marketing]);
    }

    public function editMarketing() {
        $marketing = MarketingRelaciones::where('name', 'Marketing')->get();

        return view('admin.marketing.edit', ['marketing' => $marketing]);
    }

    public function editMarketingAction(Request $request) 
    {
        $marketing = MarketingRelaciones::where('name', 'Marketing')->get();
        
        if (!$marketing) {
            // Edit
            $marketing = new marketing();
        }

        $marketing->name = $request->name;
        $marketing->paragraph1 = $request->paragraph1;
        $marketing->paragraph2 = $request->paragraph2;

        $marketing->save();

        return redirect(route('admin-marketing'));

    }

    public function relaciones() {
        $relaciones = marketingRelaciones::where('name', 'relaciones')->get();

        return view('admin.relaciones.list', ['relaciones' => $relaciones]);
    }

    public function editRelaciones() {
        $relaciones = marketingRelaciones::where('name', 'relaciones')->get();

        return view('admin.relaciones.edit', ['relaciones' => $relaciones]);
    }

    public function editRelacionesAction(Request $request) 
    {
        $relaciones = marketingRelaciones::where('name', 'relaciones')->get();
        
        if (!$relaciones) {
            // Edit
            $relaciones = new relaciones();
        }

        $relaciones->name = $request->name;
        $relaciones->paragraph1 = $request->paragraph1;
        $relaciones->paragraph2 = $request->paragraph2;

        $relaciones->save();

        return redirect(route('admin-relaciones'));

    }
}
