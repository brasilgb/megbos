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
        DROP PROCEDURE IF EXISTS `SP_StockProduct`;
        CREATE PROCEDURE `SP_StockProduct`(
            IN `SP_produto_id` INT(10),
            IN `SP_quantidade` INT(10),
            IN `SP_valvenda` DECIMAL(10,2))
            BEGIN declare contador int(10);
            select count(*) into contador from tstock_products where produto_id = SP_produto_id;
            if contador > 0 then
            update tstock_products set produto_id = SP_produto_id, quantidade = quantidade + SP_quantidade, valvenda = valvenda + SP_valvenda where produto_id = SP_produto_id;
            else
            insert into tstock_products ( produto_id, quantidade, valvenda ) values( SP_produto_id, SP_quantidade, SP_valvenda );
            end if;
            END
            ');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::unprepared('DROP PROCEDURE IF EXISTS `SP_StockProduct`');
    }
};
