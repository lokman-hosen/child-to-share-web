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
        Schema::create('leaders', function (Blueprint $table) {
            $table->string('name');
            $table->date('dob')->nullable();
            $table->mediumText('address')->nullable();
            $table->string('organization')->nullable();
            $table->string('photo')->nullable();
            $table->enum('gender', ['male','female','other'])->default('male');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('leaders');
    }
};
