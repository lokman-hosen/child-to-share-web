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
        Schema::create('fulfillments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('donor_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('donation_id')->constrained()->onDelete('cascade');
            $table->foreignId('wish_id')->constrained()->onDelete('cascade');
            $table->foreignId('wisher_id')->constrained('users')->onDelete('cascade');
            $table->boolean('need_admin_assistance')->default(false);
            $table->string('method')->comment('self-delivery,courier,admin-assistance');
            $table->text('note')->nullable();
            $table->timestamp('scheduled_at')->nullable();
            $table->timestamp('delivered_at')->nullable();
            $table->foreignId('confirmed_by')->nullable()->constrained('users');
            $table->enum('status', ['requested', 'scheduled', 'in_progress', 'delivered', 'cancelled'])->default('requested');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fulfillments');
    }
};
