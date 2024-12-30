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
        Schema::create('torders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cliente_id')->nullable()->constrained('tcustomers')->onDelete('cascade');
            $table->string('equipamento', 100);
            $table->string('modelo', 50)->nullable();
            $table->string('senha', 50)->nullable();
            $table->text('defeito')->nullable();
            $table->text('estado')->nullable();
            $table->text('acessorios')->nullable();
            $table->text('descorcamento')->nullable();
            $table->decimal('valorcamento', 10,2)->nullable();
            $table->text('servico')->nullable(); // servicos prestados
            $table->text('pecas')->nullable();
            $table->decimal('valpecas', 10, 2)->nullable();
            $table->decimal('valservico', 10, 2)->nullable();
            $table->decimal('custo', 10, 2)->nullable();
            $table->string('previsao')->nullable();
            $table->string('status')->default('1');
            $table->dateTime('dtentrega')->nullable();
            $table->string('tecnico', 50)->nullable();
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
        Schema::dropIfExists('torders');
    }
};
