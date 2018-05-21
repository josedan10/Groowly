@extends('frontend.template.standard')
@section('page', 'Relaciones | ')
@section('content')
<div>
    <section class='relaciones'>
        <div class='content'>
            <div class='info'>
                <div class='capitalize'>

                    {{-- Mostramos la primera letra en capital --}}
                    <span>{!! substr($relaciones->paragraph1, 3, 1) !!}</span>
                    <p>
                        <b>{!! substr($relaciones->paragraph1, 4, strlen($relaciones->paragraph1) - 8) !!}</b>
                    </p>
                </div>
                <p>
                    <b>{!! substr($relaciones->paragraph2, 3, strlen($relaciones->paragraph2) - 8) !!}</b>
                </p>
            </div>
            <div class='links'>
                <h1>RELA</h1>
                <h1>CIONES</h1>
                <p><b>PÚBLICAS</b></p>
            </div>
        </div>
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
        @include('includes.submenu')
    </section>
</div>
@endsection