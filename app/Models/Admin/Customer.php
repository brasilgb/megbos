<?php

namespace App\Models\Admin;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    // protected $connection = 'mysql';
    protected $table = 'tenants';

    protected $guarded = ['id'];
}
