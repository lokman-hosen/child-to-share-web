<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrganizationRequest extends FormRequest
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
            'name' => 'required|string|max:255|unique:organizations',
            'contact_phone' => ['required', 'numeric','digits:11', 'regex:/(01)[0-9]{9}/', 'unique:users'],
            'contact_email' => 'nullable|string|email|max:255|unique:users',
            'address' => 'nullable|string',
            'image' => 'nullable|image|max:5000', // 5MB max
        ];
        return $rules;
    }
}
