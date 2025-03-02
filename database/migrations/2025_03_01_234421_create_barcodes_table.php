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
        Schema::create('barcodes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('year_id');
            $table->foreignId('season_id');
            $table->foreignId('gender_id');
            $table->foreignId('group_id');
            $table->foreignId('product_id');
            $table->foreignId('color_id');
            $table->foreignId('size_id');
            $table->foreignId('category_id');
            $table->string('code')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('barcodes');
    }
};
