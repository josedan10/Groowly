<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class MarketingSubsections extends Model
{
    use Notifiable;

    protected $table = 'marketing_subsections';

    protected $fillable = [
        'name', 'title', 'paragraph1'
    ];
}
