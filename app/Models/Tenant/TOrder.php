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
        'servico',
        'dtentrega',
        'obs'
    ];
    
    public function cliente()
    {
        return $this->belongsTo(TCustomer::class);
    }

    public function produtos()
    {
        return $this->belongsToMany(TProduct::class, 'torder_tproduct', 'id', 'produto_id');
    }
}
