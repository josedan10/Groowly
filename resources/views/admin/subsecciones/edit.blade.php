@extends('admin.template.main')
@section('content')
<header>
    <h1>Subsection - Edit</h1>
</header>

<div class="flex-center main">
    <form action="{{ url('/admin/subsection/edit') }}" method="POST">
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        @if(!subsection) <input type="hidden" name="id" value="{{ $subsection->id }}">@endif
        <input type="hidden" name="id" value="{{}}">
        <div class="form-group">
            <label class="form-label" for="name">Nombre</label>
            <input class="form-input" type="text" id="name" name="name" @if(!$subsection)'value="'.$subsection->name.'"'@endif>
        </div>
        <div class="form-group">
            <label class="form-label" for="title">Titulo</label>
            <textarea class="form-input ckeditor" type="text" id="title" name="title" @if(!$subsection)'value="'.$subsection->title.'"'@endif placeholder="Write here..."></textarea>
        </div>
        <div class="form-group">
            <label class="form-label" for="paragraph1">Parrafo 1</label>
            <textarea class="form-input ckeditor" type="text" id="paragraph1" name="paragraph1" @if(!$subsection)'value="'.$subsection->paragraph1.'"'@endif placeholder="Write here..."></textarea>
        </div>
        <div class="flex-center form-group">
            <input class="btn btn-primary" type="submit" value="Editar">
        </div>
    </form>
</div>
@endsection