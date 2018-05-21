@extends('frontend.template.standard')
@section('page', 'Contact | ')
@section('content')

    <main id="main"></main>
    @if(Session::has('status'))
        <span class="message-contact">{{ Session::get('status') }}</span>
    @endif
    <div id="app"></div>
    <script src="{{ asset('js/main.min.js') }}"></script>
    <script src="{{ asset('js/contact.min.js') }}"></script>
@endsection