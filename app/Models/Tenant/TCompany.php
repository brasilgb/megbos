<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TCompany extends Model
{
    
    protected $table = "tcompanies";

    protected $fillable = [
        'empresa',
        'razao',
        'cnpj',
        'logo',
        'endereco',
        'bairro',
        'uf',
        'cidade',
        'cep',
        'telefone',
        'site',
        'email'
    ];
}
