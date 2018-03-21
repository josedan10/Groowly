<h1>Nuevo mensaje</h1>
<div>
    <p>
        Mensaje de <b>{{ $user['name']}}</b>. <br>
        <b>Dirección:</b> {{ $user['address'] }} <br>
        <b>Teléfono:</b> {{ $user['phone'] }} <br>
    </p>
    
    <p>{{ $user['comment'] }}</p>
</div>