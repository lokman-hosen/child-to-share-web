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
            'item_condition' => 'required|string',
            //'category_id' => 'required|exists:categories,id',
            'category' => 'required|string',
            //'status' => 'required|string',
            'auto_tags' => 'sometimes|array', // Change to array validation
            'auto_tags.*' => 'required|string', // Each tag should be a string
            'attachments.*' => 'required|file|mimes:jpeg,png,jpg,mp4|max:10240', // 10MB max
        ];
    }
}
