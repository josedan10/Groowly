@extends('template.standard')
@section('content')
<div>
    <section className='marketing'>
        <div className='content'>
            <div className='text-decoration'>
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
            <div className='info'>
                <div className='capitalize'>

                    {{-- Mostramos la primera letra en capital --}}
                    <span>{{}}P</span>
                    <p>
                        <b>otencializamos el impacto de tu marca a través de poderosas estrategias de marketing digital.</b>
                    </p>
                </div>
                <p>
                    <b>Nuestro enfoque sobre marketing digital es holístico. Permítenos contactarte y descubre cómo hemos ayudado a empresas como la tuya.</b>
                </p>

            </div>
            <div className='links'>
                <h1>MAR</h1>
                <h1>KETING</h1>
                <p><b>DIGITAL</b></p>
            </div>
        </div>
        @include('includes.submenuMarketing')
    </section>
</div>
@endsection