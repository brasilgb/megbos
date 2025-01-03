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
        Schema::create('tmessages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('remetente')->nullable()->constrained(table: 'users')->onDelete('cascade');
            $table->foreignId('destinatario')->nullable()->constrained(table: 'users')->onDelete('cascade');
            $table->text('mensagem');
            $table->tinyInteger('status')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tmessages');
    }
};
