<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

<title>@yield('page', 'Home | ')Groowly</title>

<link rel="icon" href="{{ 'favicon.ico' }}" type="image/x-icon" />	
<link rel="stylesheet" href="{{ asset('css/style.css') }}">
<link rel="stylesheet" href="{{ asset('css/animate.css') }}">

{{--  Style sheet  --}}
@if(isset($page))
    <link rel="stylesheet" href="{{ asset('css/'.$page.'.css') }}">
@endif

<script src="{{ asset('js/config.min.js') }}"></script>