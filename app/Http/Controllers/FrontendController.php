<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\MarketingRelaciones;
use App\MarketingSubsections;
use App\RelacionesSubsections;

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
        $subsections = MarketingSubsections::all();

        return view('frontend.marketing', ['section' => 'Marketing', 'marketing' => $marketing, 'subsections' => $subsections]);
    }

    public function relaciones()
    {
        $relaciones = MarketingRelaciones::where('name', 'relaciones')->first();
        $subsections = MarketingSubsections::all();

        return view('frontend.relaciones', ['section' => 'Relaciones', 'relaciones' => $relaciones, 'subsections' => $subsections]);
    }

    public function marketingSubsections($slug)
    {

        $subsection = MarketingSubsections::where('name', $slug)->first();
        $subsections = MarketingSubsections::all();

        
        $find = array('<p>', '</p>');
        $subsection_title = str_replace($find, '', $subsection->title);

        // Formating title
        $subsection->title = trim(preg_replace('/\s\s+/', '<br>', $subsection->title));
        // dd($subsection->title);
        $subsection->title = str_replace($find, '', $subsection->title);

        return view('frontend.subsections', ['subsections' => $subsections, 'subsection' => $subsection, 'section' => 'Marketing', 'title' => $subsection_title]);
    }

    public function relacionesSubsections($slug)
    {

        $subsection = RelacionesSubsections::where('name', $slug)->first();
        $subsections = RelacionesSubsections::all();

        
        $find = array('<p>', '</p>');
        $subsection_title = str_replace($find, '', $subsection->title);

        // Formating title
        $subsection->title = trim(preg_replace('/\s\s+/', '<br>', $subsection->title));
        $subsection->title = str_replace($find, '', $subsection->title);

        return view('frontend.subsections', ['subsections' => $subsections, 'subsection' => $subsection, 'section' => 'Relaciones', 'title' => $subsection_title]);
    }
}
