@extends('admin.template.main')
@section('content')
<header>
    <h1>Community - Edit</h1>
</header>

<div class="flex-center main">
    @if($community)
        <form action="{{ url('/admin/community/'.$community->id.'/edit') }}" method="POST" enctype="multipart/form-data">
    @else
        <form action="{{ url('/admin/community/add') }}" method="POST" enctype="multipart/form-data">
    @endif
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        <div class="form-group">
            <label class="form-label" for="name">Nombre</label>
            <input class="form-input" type="text" id="name" name="name" placeholder="Nombre" value="{{ ($community)?$community->name:'' }}">
        </div>
        <div class="form-group">
                <label class="form-label" for="img_big">Imagen grande</label>
                <input class="form-input" type="file" id="img_big" name="img_big" />
            </div>
        <div class="form-group">
            <label class="form-label" for="img_mobile">Imagen mobile</label>
            <input class="form-input" type="file" id="img_mobile" name="img_mobile" />
        </div>
        <div class="form-group">
            <label class="form-label" for="script">Script</label>
            <input class="form-input" type="text" id="script" name="script" />
        </div>
        <div class="flex-center form-group">
            <input class="btn btn-primary" type="submit" value="Editar">
        </div>
    </form>
</div>
@endsection