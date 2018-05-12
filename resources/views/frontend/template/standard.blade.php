<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    @include('includes/head')
</head>
<body>
    @include('includes.header')
    @yield('content')
    <script src="{{ asset('js/index.min.js') }}"></script>
    <script src="{{ asset('js/nav.min.js') }}"></script>
    <script>
        function toogleMenu() {
            let nav = document.getElementById('nav-menu');
            let icon = document.getElementById('menu-icon');

            if (nav.classList.contains('show')) {
                nav.classList.remove('show');
                nav.classList.add('hide');
                icon.classList.remove('active');
                
            } else {
                nav.classList.remove('hide');
                nav.classList.add('show');
                icon.classList.add('active');
            }
        }

        var icon = document.getElementById('menu-icon');
        icon.addEventListener('click', toogleMenu);
    </script>
</body>
</html>