@extends('frontend.template.standard')
@section('page', 'Videos | ')
@section('content')
    <main>
        <div id="app"></div>
        <script src="{{ asset('js/videos.min.js') }}"></script>
    </main>
@endsection