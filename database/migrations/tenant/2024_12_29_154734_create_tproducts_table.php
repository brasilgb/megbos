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
        Schema::create('tproducts', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary()->index();
            $table->text('codbarra')->nullable();
            $table->string('descricao');
            $table->string('partnumber')->nullable();
            $table->decimal('valcompra', 10,2)->default(0);
            $table->decimal('valvenda', 10,2)->default(0);
            $table->tinyInteger('unidade');
            $table->string('quantidade');
            $table->string('estmaximo');
            $table->string('estminimo');
            $table->string('tipo');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tproducts');
    }
};
