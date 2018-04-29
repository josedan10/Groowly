<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class MarketingRelaciones extends Model
{
    //
    use Notifiable;

    protected $table = 'marketing_relaciones';

    protected $fillable = [
        'name', 'paragraph1', 'paragraph2'
    ];
}
