@extends('admin.template.main')
@section('content')
<header>
    <h1>Marketing - Edit</h1>
</header>

<div class="flex-center main">
    <form action="{{ url('/admin/marketing/edit') }}" method="POST">
        <input type="hidden" name="_token" value="<?php echo csrf_token(); ?>">
        <input class="form-input" type="hidden" id="name" name="name" value="Marketing">

        <div class="form-group">
            <label class="form-label" for="paragraph1">Parrafo 1</label>
            <textarea class="form-input ckeditor" type="text" id="paragraph1" name="paragraph1"  placeholder="Write here...">
                @if(!$marketing){{$marketing->paragraph1}}@endif
            </textarea>
        </div>
        <div class="form-group">
            <label class="form-label" for="paragraph2">Parrafo 2</label>
            <textarea class="form-input ckeditor" type="text" id="paragraph2" name="paragraph2" placeholder="Write here...">
                    @if(!$marketing){{$marketing->paragraph2}}@endif
            </textarea>
        </div>
        <div class="flex-center form-group">
            <input class="btn btn-primary" type="submit" value="Editar">
        </div>
    </form>
</div>
@endsection