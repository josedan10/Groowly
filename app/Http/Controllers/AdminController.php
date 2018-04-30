<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Home;
use App\MarketingRelaciones;
use App\User;
use App\MarketingSubsections;
use App\RelacionesSubsections;

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
        $relaciones = MarketingRelaciones::where('name', 'relaciones')->get();

        return view('admin.relaciones.list', ['relaciones' => $relaciones]);
    }

    public function editRelaciones() {
        $relaciones = MarketingRelaciones::where('name', 'relaciones')->get();

        return view('admin.relaciones.edit', ['relaciones' => $relaciones]);
    }

    public function editRelacionesAction(Request $request) 
    {
        $relaciones = MarketingRelaciones::where('name', 'relaciones')->get();
        
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

    public function users() {
        $users = User::all();
        // dd($users);
        return view('admin.users.list', ['users' => $users]);
    }   

    public function subsection($subsection) {

        // dd($subsection);

        switch($subsection) {
            case 'marketing':
                $subsecciones = MarketingSubsections::all();
                break;
            default:
                $subsecciones = RelacionesSubsections::all();
                break;
        }

        return view('admin.subsecciones.list', ['seccion' => $subsection, 'subsections' => $subsecciones]);
    }
    
    public function addSubsectionMarketing() {

        // $subsection = MarketingSubsections::find($id);

        return view('admin.subsecciones.edit', ['subsection' => null, 'name' => 'marketing']);
    }

    public function addSubsectionRelaciones() {

        // $subsection = MarketingSubsections::find($id);

        return view('admin.subsecciones.edit', ['subsection' => null, 'name' => 'relaciones']);
    }

    public function addSubsectionMarketingAction(Request $req) {

        $subsection = new MarketingSubsections();

        $subsection->name = $req->name;
        $subsection->title = $req->title;
        $subsection->paragraph1 = $req->paragraph1;
        $subsection->save();

        return redirect(url('/admin/subsections/marketing'));
    }

    public function addSubsectionRelacionesAction(Request $req) { 

        $subsection = new RelacionesSubsections();

        $subsection->name = $req->name;
        $subsection->title = $req->title;
        $subsection->paragraph1 = $req->paragraph1;
        $subsection->save();

        return redirect(url('/admin/subsections/relaciones'));
    }

    public function editSubsectionMarketing($id) {

        $subsection = MarketingSubsections::find($id);

        return view('admin.subsecciones.edit', ['subsection' => $subsection]);
    }

    public function editSubsectionRelaciones($id) {

        $subsection = RelacionesSubsections::find($id);

        return view('admin.subsecciones.edit', ['subsection' => $subsection]);
    }

    public function editSubsectionMarketingAction(Request $req) {

        $subsection = new MarketingSubsections();

        $subsection->id = $req->id;
        $subsection->name = $req->name;
        $subsection->title = $req->title;
        $subsection->paragraph1 = $req->paragraph1;
        $subsection->save();

        return redirect(url('/admin/subsections/marketing'));
    }

    public function editSubsectionRelacionesAction(Request $req) {

        $subsection = new RelacionesSubsections();

        $subsection->id = $req->id;
        $subsection->name = $req->name;
        $subsection->title = $req->title;
        $subsection->paragraph1 = $req->paragraph1;
        $subsection->save();

        return redirect(route('/admin/subsections/relaciones'));
    }
}
