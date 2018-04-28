@extends('admin.template.main')
@section('content')
<header>
    <h1>Home - Edit</h1>
</header>

<div class="flex-center main">
    <form action="{{ url('/admin/home/edit') }}" method="POST">
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        <div class="form-group">
            <label class="form-label" for="name">Nombre</label>
            <input class="form-input" type="text" id="name" name="name" placeholder="Nombre" value="{{ ($home)?$home->name:'' }}">
        </div>
        <div class="form-group">
                <label class="form-label" for="title">Titulo</label>
                <input class="form-input" type="text" id="title" name="title" placeholder="Titulo" value="{{ ($home)?$home->title:'' }}">
            </div>
        <div class="form-group">
            <label class="form-label" for="paragraph1">Parrafo 1</label>
            <textarea class="form-input" type="text" id="paragraph1" name="paragraph1" @if($home)'value="'.$home->paragraph1.'"'@endif placeholder="Write here..."></textarea>
        </div>
        <div class="form-group">
                <label class="form-label" for="paragraph2">Parrafo 2</label>
                <textarea class="form-input" type="text" id="paragraph2" name="paragraph2" @if($home)'value="'.$home->paragraph2.'"'@endif placeholder="Write here..."></textarea>
            </div>
        <div class="flex-center form-group">
            <input class="btn btn-primary" type="submit" value="Editar">
        </div>
    </form>
</div>
@endsection