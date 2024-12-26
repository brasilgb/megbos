<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TPart extends Model
{
    protected $table = 'tparts';
    protected $fillable = [
        'id',
        'codbarra',
        'descricao',
        'partnumber',
        'valcompra',
        'valvenda',
        'unidade',
        'quantidade',
        'estmaximo',
        'estminimo',
        'tipo',
    ];
}
