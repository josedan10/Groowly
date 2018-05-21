@extends('admin.template.main')
@section('content')
<header>
    <h1>Community - Edit</h1>
</header>

<div class="flex-center main">
    @if($community)
        <form action="{{ url('/admin/community/'.$community->id.'/edit') }}" method="POST">
    @else
        <form action="{{ url('/admin/community/add') }}" method="POST">
    @endif
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        <div class="form-group">
            <label class="form-label" for="name">Nombre</label>
            <input class="form-input" type="text" id="name" name="name" placeholder="Nombre" value="{{ ($community)?$community->name:'' }}">
        </div>
        <div class="form-group">
                <label class="form-label" for="title">Imagen grande</label>
                <input class="form-input" type="file" id="img_big" name="img-big" />
            </div>
        <div class="form-group">
            <label class="form-label" for="paragraph1">Imagen mobile</label>
            <input class="form-input" type="file" id="img_mobile" name="img-big" />
        </div>
        <div class="flex-center form-group">
            <input class="btn btn-primary" type="submit" value="Editar">
        </div>
    </form>
</div>
@endsection