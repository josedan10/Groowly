<nav class='submenu'>
    <ul>
        @foreach($subsections as $subsection)
            <li><a href="{{'/'.$section.'/'.$subsection->name}}">{!! substr($subsection->title, 3, strlen($subsection->title) - 4) !!}</a></li>
        @endforeach
    </ul>
</nav>