<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TProduct extends Model
{
    protected $table = 'tproducts';
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