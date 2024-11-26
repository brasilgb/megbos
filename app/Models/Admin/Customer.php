<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;
use Spatie\Multitenancy\Models\Tenant;
class Customer  extends Tenant
{
    protected $table = 'tenants';
    protected $guarded = ['id'];

    // protected $fillable = [
    //     'name',
    //     'domain',
    //     'database',
    //     'customer',
    //     'cpfcnpj',
    //     'cep',
    //     'state',
    //     'city',
    //     'district',
    //     'street',
    //     'number',
    //     'complement',
    //     'email',
    //     'telephone',
    //     'whatsapp', 
    //     'status', 
    //     'payment', 
    // ];


}
