<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb18030">
    @section('page', 'Admin | ')
    @include('includes/head', ['page' => 'admin'])
</head>
<body>
    <main id= "app">
        <aside class="col-2 col-mr-auto bg-primary">
            <div class="flex-center logo">
                <img src="src/img/logo.svg" alt="">
            </div>

            <div class="flex-around admin-data">
                <figure class="avatar avatar-xl" data-initial="JD">
                    <!-- <img src="img/avatar-1.png" alt="..."> -->
                    <i class="avatar-presence online"></i>
                </figure>
                <div class="flex-around-column admin-info">
                    <h5>Welcome</h5>
                </div>
            </div>

            <nav>
                <ul class="menu">
                    <li class="menu-item">                        
                        <a href="{{ route('admin-home') }}">
                            <i class="icon icon-home mr-1"></i>
                            Home
                        </a>
                    </li>
                    <li class="menu-item">
                        <div class="accordion">
                            <input type="radio" id="accordion-relaciones" name="accordion-radio" hidden>
                            <label class="accordion-header c-hand" for="accordion-relaciones">
                                <i class="icon icon-arrow-right mr-1"></i>
                                Relaciones Públicas
                            </label>
                            <div class="accordion-body">
                                <ul class="menu menu-nav">
                                    <li class="menu-item"><a href="{{ route('admin-relaciones') }}">Ver Sección</a></li>
                                    <li class="menu-item"><a href="{{ url('admin/subsections/relaciones') }}">Ver Subsecciones</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item">
                        <div class="accordion">
                            <input type="radio" id="accordion-marketing" name="accordion-radio" hidden>
                            <label class="accordion-header c-hand" for="accordion-marketing">
                                <i class="icon icon-arrow-right mr-1"></i>
                                Marketing Digital
                            </label>
                            <div class="accordion-body">
                                <ul class="menu menu-nav">
                                    <li class="menu-item"><a href="{{ route('admin-marketing') }}">Ver Sección</a></li>
                                    <li class="menu-item"><a href="{{ url('admin/subsections/marketing') }}">Ver Subsecciones</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="menu-item">
                        
                        <li class="menu-item"><a href="{{ route('admin-community') }}">Community</a></li>
                
                    </li>
                    {{-- <li class="menu-item">
                        <div class="accordion">
                            <input type="radio" id="accordion-contacto" name="accordion-radio" hidden>
                            <label class="accordion-header c-hand" for="accordion-contacto">
                                <i class="icon icon-arrow-right mr-1"></i>
                                Contacto
                            </label>
                            <div class="accordion-body">
                                <ul class="menu menu-nav">
                                    <li class="menu-item">Item 1</li>
                                    <li class="menu-item">Item 2</li>
                                    <li class="menu-item">Item 3</li>
                                </ul>
                            </div>
                        </div>
                    </li> --}}
                    {{-- <li class="menu-item">
                        <div class="accordion">
                            <input type="radio" id="accordion-admins" name="accordion-radio" hidden>
                            <label class="accordion-header c-hand" for="accordion-admins">
                                <i class="icon icon-arrow-right mr-1"></i>
                                Admin
                            </label>
                            <div class="accordion-body">
                                <ul class="menu menu-nav">
                                    <li class="menu-item"><a href="{{ route('admin-users') }}">Administrar usuarios<a></li>
                                    <li class="menu-item"><a href="{{ route('my-account') }}">Mi cuenta</a></li>
                                </ul>
                            </div>
                        </div>
                    </li> --}}
                </ul>
            </nav>
        </aside>

        <section class="col-10 col-ml-auto content">
            @yield('content')
        </section>
        <script src="{{ asset('vendors/ckeditor/ckeditor.js') }}"></script>
    </main>
</body>
</html>