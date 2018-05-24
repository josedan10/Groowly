@extends('admin.template.main')
@section('content')
<header class="flex-between">
    <h1>Communities</h1>
        <div class="actions">
            <a href="{{route('add-community')}}"><i class="icon icon-plus"></i></a>
        </div>
    </header>
    <div class="flex-center-wrap main">
        @if($communities->isEmpty())
            No hay datos para mostrar
        @else
            <table class="list">
                <thead>
                    <tr>
                        <th class="col-3">Nombre</th>
                        <th class="col-3">Imagen Grande</th>
                        <th class="col-4">Imagen Mobile</th>
                        <th class="col-2">
                            Actions
                        </th> 
                    </tr>
                </thead>
                <tbody>
                    @foreach($communities as $community)

                        <tr>
                            <td class="col-1">{{ $community->name }}</td>
                            <td class="col-3"><img src="{{ asset('storage/community/'.basename($community->img_big)) }}" alt=""></td>
                            <td class="col-4"><img src="{{ asset('storage/community/'.basename($community->img_mobile)) }}" alt=""></td>
                            <td class="col-1">
                                <div class="flex-around actions">
                                        {{-- <a><i class="icon icon-photo c-hand"></i></a> --}}
                                    <a href="{{ url('admin/community/'.$community->id.'/edit') }}"><i class="icon icon-edit c-hand"></i></a>
                                    <a href="{{ url('admin/community/'.$community->id.'/delete') }}"><i class="icon icon-delete c-hand"></i></a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
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