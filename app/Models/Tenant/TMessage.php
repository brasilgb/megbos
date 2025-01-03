<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TMessage extends Model
{

    protected $table = "tmessages";

    protected $fillable = [
        'remetente',
        'destinatario',
        'mensagem',
        'status',
    ];
}
