<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TOrder extends Model
{
    protected $table = 'torders';

    protected $fillable = [
        'id',
        'cliente_id',
        'equipamento',
        'modelo',
        'senha',
        'defeito',
        'estado',
        'acessorios',
        'previsao',
        'descorcamento',
        'valorcamento',
        'pecas',
        'valpecas',
        'valservico',
        'custo',
        'status',
        'tecnico',
        'detalhes',
        'dtentrega',
        'obs'
    ];
}
