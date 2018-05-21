<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Community extends Model
{
    //

    use Notifiable;

    protected $table = 'communities';

    protected $fillable = [
        'name', 'img_big', 'img_mobile', 'script'
    ];
}
