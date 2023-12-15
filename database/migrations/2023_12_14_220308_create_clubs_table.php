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
        Schema::create('clubs', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('city');
            $table->integer('mp')->nullable()->default(0);
            $table->integer('w')->nullable()->default(0);
            $table->integer('d')->nullable()->default(0);
            $table->integer('l')->nullable()->default(0);
            $table->integer('gf')->nullable()->default(0);
            $table->integer('ga')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clubs');
    }
};
