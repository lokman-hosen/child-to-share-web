<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
        $currentId = Request::segment(2);
        return [
            'name' => 'required|string|max:255',
            'phone' => [
                ['nullable','digits:11','numeric','regex:/(01)[0-9]{9}/'],
                Rule::unique('users')->ignore($currentId),
            ],
            'email' => [
                ['nullable','string','email'],
                Rule::unique('users')->ignore($currentId),
            ],

            'dob' => 'required|date|before:today',
            'guardian_name' => 'required|string',
            'guardian_phone' => ['nullable', 'numeric','digits:11', 'regex:/(01)[0-9]{9}/'],
            'relationship' => 'required|string',
            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
            'photo' => 'nullable|image|max:5000', // 5MB max
        ];
    }
}
