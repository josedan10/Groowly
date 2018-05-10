@extends('admin.template.main')
@section('content')
<header>
    <h1>Subsection - Edit</h1>
</header>

<div class="flex-center main">
    @if ($subsection !== null)
    <form action="{{ url('/admin/subsection/'.$name.'/'.$subsection->id.'/edit') }}" method="POST">
    @else 
    <form action="{{ url('/admin/subsection/'.$name.'/add') }}" method="POST">
    @endif
        @csrf
        @if($subsection !== null) <input type="hidden" name="id" value="{{ $subsection->id }}">@endif
        <div class="form-group">
            <label class="form-label" for="name">Slug</label>
            <input class="form-input" type="text" id="name" name="name" @if($subsection !== null)value="{{$subsection->name}}"@endif>
        </div>
        <div class="form-group">
            <label class="form-label" for="title">Titulo</label>
            <textarea class="form-input ckeditor" type="text" id="title" name="title" placeholder="Write here...">@if($subsection !== null){{$subsection->title}}@endif</textarea>
        </div>
        <div class="form-group">
            <label class="form-label" for="paragraph1">Parrafo 1</label>
            <textarea class="form-input ckeditor" type="text" id="paragraph1" name="paragraph1" placeholder="Write here...">@if($subsection !== null){{$subsection->paragraph1}}@endif</textarea>
        </div>
        <div class="flex-center form-group">
            <input class="btn btn-primary" type="submit" value="Editar">
        </div>
    </form>
</div>
@endsection