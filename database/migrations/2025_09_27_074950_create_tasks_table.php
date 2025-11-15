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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('fulfillment_id')->constrained()->onDelete('cascade');
            $table->foreignId('user_id')->nullable()->comment('assigned admin id')
                ->constrained('users')->onDelete('set null');
            $table->text('task_notes')->nullable();
            $table->json('activity_log')->nullable();
            $table->timestamp('assigned_at')->nullable();
            $table->timestamp('completed_at')->nullable();
            $table->enum('status', ['new', 'assigned', 'in_progress', 'completed', 'cancelled'])->default('new');
            $table->timestamps();
            $table->softDeletes();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
