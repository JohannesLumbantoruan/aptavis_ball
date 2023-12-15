<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'city',
        'mp',
        'w',
        'd',
        'l',
        'gf',
        'ga'
    ];
}
