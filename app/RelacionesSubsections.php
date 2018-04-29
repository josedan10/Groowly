<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class RelacionesSubsections extends Model
{
    use Notifiable;

    protected $table = 'relaciones_subsections';

    protected $fillable = [
        'name', 'title', 'paragraph1'
    ];
}
