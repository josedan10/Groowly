<nav class='submenu'>
    <ul>
        @foreach($subsections as $subsec)
            <li><a href="{{'/'.$section.'/'.$subsec->name}}" @if(isset($subsection) && $subsection->name == $subsec->name) class="active" @endif>{!! substr($subsec->title, 3, strlen($subsec->title) - 4) !!}</a></li>
        @endforeach
    </ul>
</nav>