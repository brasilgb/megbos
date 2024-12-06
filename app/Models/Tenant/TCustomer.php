<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TCustomer extends Model
{
    protected $table = 'tcustomers';
    protected $fillable = [
        'id',
        'cpf',
        'nascimento',
        'nome',
        'email',
        'cep',
        'uf',
        'cidade',
        'bairro',
        'logradouro',
        'numero',
        'complemento',
        'telefone',
        'whatsapp',
        'contato',
        'telcontato',
        'obs',
    ];
}
