<nav class='submenu'>
    <ul>
        @foreach($subsections as $subsection)
            <li><a href="{{'/'.$subsection->name}}">{!! substr($subsection->title, 3, strlen($subsection->title) - 4) !!}</a></li>
        @endforeach
        {{-- <li><a href='{{ '/'.$subsections->name }}'>ESTRATEGIAS <br />DE COMUNICACIÓN</a></li>
        <li><a href='{{ '/'.$subsections->name }}'>CONVOCATORIA <br />DE MEDIOS</a></li>
        <li><a href='{{ '/'.$subsections->name }}'>POSICIONAMIENTO <br />EN MEDIOS</a></li>
        <li><a href='{{ '/'.$subsections->name }}'>CONTENIDO <br />EDITORIAL</a></li>
        <li><a href='{{ '/'.$subsections->name }}'>PRODUCCIÓN <br />DE EVENTOS</a></li>
        <li><a href='{{ '/'.$subsections->name }}'>DIGITAL PR</a></li> --}}
    </ul>
</nav>