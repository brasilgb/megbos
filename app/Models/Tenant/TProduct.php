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
    public function ordens()
    {
        return $this->belongsToMany(TOrder::class, 'torder_tproduct', 'id', 'ordem_id');
    }

}