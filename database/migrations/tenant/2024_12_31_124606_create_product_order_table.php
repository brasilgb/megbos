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
        Schema::create('tproduct_order', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ordem_id')->nullable()->constrained('torders')->onDelete('cascade');
            $table->foreignId('produto_id')->nullable()->constrained('tproducts')->onDelete('cascade');
            $table->integer('quantidade');
            $table->decimal('valvenda', 10,2);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tproduct_order');
    }
};
