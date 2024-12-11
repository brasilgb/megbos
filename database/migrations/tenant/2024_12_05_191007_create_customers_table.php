<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tcustomers', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary()->index();
            $table->string('cpf', 50)->nullable();
            $table->date('nascimento')->nullable();
            $table->string('nome', 50);
            $table->string('email', 50)->nullable();
            $table->string('cep', 20)->nullable();
            $table->string('uf', 20)->nullable();
            $table->string('cidade', 50)->nullable();
            $table->string('bairro', 50)->nullable();
            $table->string('logradouro', 80)->nullable();
            $table->integer('numero')->nullable();
            $table->string('complemento', 20)->nullable();
            $table->string('telefone', 20);
            $table->string('contato', 50)->nullable();
            $table->string('whatsapp', 50)->nullable();
            $table->string('telcontato', 20)->nullable();
            $table->text('obs')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tcustomers');
    }
};
