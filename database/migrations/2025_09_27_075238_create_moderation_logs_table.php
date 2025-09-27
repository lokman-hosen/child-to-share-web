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
        Schema::create('moderation_logs', function (Blueprint $table) {
            $table->id();
            $table->morphs('moderatable');
            $table->foreignId('moderator_id')->nullable()->constrained('users')->onDelete('set null');
            $table->enum('action', ['approved', 'rejected', 'flagged', 'auto_flagged']);
            $table->text('reason')->nullable();
            $table->decimal('nsfw_score', 3, 2)->nullable();
            $table->json('detected_tags')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('moderation_logs');
    }
};
