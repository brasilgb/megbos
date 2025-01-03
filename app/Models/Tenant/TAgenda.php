<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TAgenda extends Model
{
    protected $table = 'tagendas';
    
    protected $fillable = [
        'cliente_id',
        'datahora',
        'servico',
        'detalhes',
        'tecnico',
        'status',
        'obs'
    ];
    
    public function cliente()
    {
        return $this->belongsTo(TCustomer::class);
    }
    
}
