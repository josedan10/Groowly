@extends('frontend.template.standard')
@section('page', 'Home | ')
@section('content')
    <main id="app">
        <section class='home' id='Home'>
            <article>
                <h1>
                    {{$home->title}}
                </h1>

                <p>
                    <b>{!!$home->paragraph1!!}</b>
                </p>

                <p>
                    <b>{!!$home->paragraph2!!}</b>
                </p>
            </article>
            <div id="arrow" class='arrow'>
            </div>
        </section>

        <section class='sections-links'>
            <a href='/Marketing' class='links'>
                <div>
                    <h1>MAR</h1>
                    <h1>KETING</h1>
                    <h2><b>DIGITAL</b></h2>
                </div>
            </a>
            <a href='/Relaciones' class='links'>
                <div>
                    <h1>RELA</h1>
                    <h1>CIONES</h1>
                    <h2><b>PÚBLICAS</b></h2>
                </div>
            </a>	
        </section>
    </main>
    <script src="{{ asset('js/arrow.min.js') }}"></script>
@endsection