<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeColumnsHome extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->text('paragraph1')->change();
            $table->text('paragraph2')->change();
        });

        Schema::table('marketing_relaciones', function (Blueprint $table) {
            $table->text('paragraph1')->change();
            $table->text('paragraph2')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
