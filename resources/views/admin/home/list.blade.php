@extends('admin.template.main')

@section('content')
<header class="flex-between">
    <h1>Home</h1>
    <div class="actions">
        <a href="{{route('edit-home')}}"><i class="icon icon-edit"></i></a>
    </div>
</header>
<div class="flex-center-wrap main">
    @if($home === null)
        No hay datos para mostrar
    @else
        <table class="list">
            <thead>
                <tr>
                    <th class="col-1">Nombre</th>
                    <th class="col-3">Titulo</th>
                    <th class="col-4">Parrafo 1</th>
                    <th class="col-4">Parrafo 2</th>
                    {{--  <th class="col-1">
                        Actions
                    </th>  --}}
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td class="col-1">{{ $home->name }}</td>
                    <td class="col-3">{{ $home->title }}</td>
                    <td class="col-4">{{ $home->paragraph1 }}</td>
                    <td class="col-4">{{ $home->paragraph2 }}</td>
                    {{--  <td class="col-1">
                        <div class="flex-around actions">
                                <a><i class="icon icon-photo c-hand"></i></a>
                                <a><i class="icon icon-edit c-hand"></i></a>
                                <a><i class="icon icon-delete c-hand"></i></a>
                        </div>
                    </td>  --}}
                </tr>
            </tbody>
        </table>

        {{-- <ul class="pagination">
            <li class="page-item disabled">
                <a href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item active">
                <a href="#">1</a>
            </li>
            <li class="page-item">
                <a href="#">2</a>
            </li>
            <li class="page-item">
                <a href="#">3</a>
            </li>
            <li class="page-item">
                <span>...</span>
            </li>
            <li class="page-item">
                <a href="#">12</a>
            </li>
            <li class="page-item">
                <a href="#">Next</a>
            </li>
            </ul> --}}
    @endif
</div>
@endsection