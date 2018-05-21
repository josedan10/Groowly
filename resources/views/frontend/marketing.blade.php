@extends('frontend.template.standard')
@section('page', 'Marketing | ')
@section('content')
<div>
    <section class='marketing'>
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
            <div class='info'>
                <div class='capitalize'>

                    {{-- Mostramos la primera letra en capital --}}
                    <span>{!! substr($marketing->paragraph1, 3, 1) !!}</span>
                    <p>
                        <b>{!! substr($marketing->paragraph1, 4, strlen($marketing->paragraph1) - 8) !!}</b>
                    </p>
                </div>
                <p>
                    <b>{{ substr($marketing->paragraph2, 3, strlen($marketing->paragraph2) - 8) }}</b>
                </p>

            </div>
            <div class='links'>
                <h1>MAR</h1>
                <h1>KETING</h1>
                <p><b>DIGITAL</b></p>
            </div>
        </div>
        @include('includes.submenu')
    </section>
</div>
@endsection