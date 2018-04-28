<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Home extends Model
{

    use Notifiable;

    protected $table = 'home';

    protected $fillable = [
        'name', 'title', 'paragraph1', 'paragraph2',
    ];
}
