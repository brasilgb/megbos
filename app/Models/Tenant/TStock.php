<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TStock extends Model
{
    protected $table = 'tstocks';

    protected $fillable = [
        'produto_id',
        'quantidade',
        'valor'
    ];
}
