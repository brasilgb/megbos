<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::unprepared('
        CREATE TRIGGER `TRG_insert_product` AFTER INSERT ON `tproducts`
        FOR EACH ROW
        BEGIN
        CALL SP_StockProduct (
            new.id,
            new.quantidade,
            new.valor
                            );
        END
        ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP TRIGGER `TRG_insert_product`');
    }
};
