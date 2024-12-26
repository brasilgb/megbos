<?php

namespace App\Models\Tenant;

use Illuminate\Database\Eloquent\Model;

class TUser extends Model
{
    protected $table = 'users';
    protected $fillable = [
        'name',
        'email',
        'password',
        'roles',
        'status',
        'telephone',
        'whatsapp'
    ];
}