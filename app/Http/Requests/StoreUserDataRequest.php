<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class StoreUserDataRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'name' => 'required|string|max:255',
            'phone' => ['nullable', 'numeric','digits:11', 'regex:/(01)[0-9]{9}/', 'unique:users'],
            'email' => 'nullable|string|email|max:255|unique:users',
            //'password' => ['required',Rules\Password::defaults()],
            'dob' => 'required|date|before:today',
            'guardian_name' => 'required|string',
            'guardian_phone' => ['nullable', 'numeric','digits:11', 'regex:/(01)[0-9]{9}/'],
            'relationship' => 'required|string',
            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
            'photo' => 'nullable|image|max:5000', // 5MB max
        ];

        return $rules;
    }
}
