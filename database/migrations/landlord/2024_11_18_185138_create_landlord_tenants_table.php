<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('domain')->unique();
            $table->string('database')->unique();

            $table->string('customer');
            $table->string('cpfcnpj');
            $table->string('cep');
            $table->string('state');
            
            $table->string('city');
            $table->string('district');
            $table->string('street');

            
            $table->string('number');
            $table->string('complement');
            $table->string('email');
            $table->string('telephone');
            
            $table->string('whatsapp'); 
            $table->string('status'); 
            $table->string('payment'); 
            $table->timestamps();
        });
    }
};
