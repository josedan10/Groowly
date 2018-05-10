<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- CSRF Token -->
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<title>@yield('page', 'Home | ')Groowly</title>

<link rel="icon" href="{{ '/favicon.ico' }}" type="image/x-icon" />	
{{-- <link rel="stylesheet" href="{{ asset('css/style.css') }}">
<link rel="stylesheet" href="{{ asset('css/animate.css') }}"> --}}

{{--  Style sheet  --}}
@if(isset($page))
    <link rel="stylesheet" href="{{asset('css/backend.css') }}">    
@else
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
@endif

<script src="{{ asset('js/config.min.js') }}"></script>