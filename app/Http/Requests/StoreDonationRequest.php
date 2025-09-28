<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDonationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'item_condition' => 'required|string',
            'status' => 'required|string',
            'auto_tags' => 'sometimes|array',
            'attachments.*' => 'file|mimes:jpeg,png,jpg,gif,mp4,avi,mov|max:10240', // 10MB max
        ];
    }
}
