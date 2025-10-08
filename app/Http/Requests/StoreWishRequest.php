<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreWishRequest extends FormRequest
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
        $rules = [
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'age_range' => 'required|string',
            'category' => 'required|string',
            'existing_attachment' => 'nullable|exists:files,id',
            'attachments' => 'nullable|array',
            'attachments.*' => 'file|mimes:jpeg,png,jpg,mp4|max:10240',
        ];

        // Add conditional requirement for attachments
        if (empty($this->existing_attachment)) {
            $rules['attachments'] = 'required|array|min:1';
        }

        return $rules;
    }

    public function messages(): array
    {
        return [
            'attachments.required_without' => 'Please upload at least one file if no existing image is selected.',
            'existing_attachment.exists' => 'The selected image does not exist.',
        ];
    }
}
