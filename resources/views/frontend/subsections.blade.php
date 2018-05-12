@extends('frontend.template.standard')
@section('page')
 {!! ucwords(strtolower($title)).' | ' !!}
@endsection
@section('content')
<section class='subsection'>
    <div class='content'>
        <div class='text-decoration'>
            <span>S</span>
            <span>E</span>
            <span>R</span>
            <span>V</span>
            <span>I</span>
            <span>C</span>
            <span>I</span>
            <span>O</span>
            <span>S</span>
        </div>
        <div class='links'>
            {{-- <h2>INFLUENCER <br/> MARKETING</h2> --}}
            <h2>{!! $subsection->title !!}</h2>
        </div>
        <div class='info'>
            <p>
                <b>{!! $subsection->paragraph1 !!}</b>
            </p>
        </div>
    </div>

    @include('includes.submenu')
</section>
@endsection