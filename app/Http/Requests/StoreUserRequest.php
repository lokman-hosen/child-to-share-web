<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class StoreUserRequest extends FormRequest
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
            'mobile' => 'required|string|max:20|unique:users,mobile',
            'email' => 'nullable|string|email|max:255|unique:users',
            //'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password' => ['required'],
            'role' => ['required', Rule::in(['donor', 'wisher', 'leader'])],
            'dob' => 'nullable|date',
            'address' => 'nullable|string',
            'organization' => 'nullable|string',
            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
            'photo' => 'nullable|image|max:5000', // 5MB max
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ];

        // Add conditional validation for 'wisher'
        if ($this->role === 'wisher') {
            $rules = array_merge($rules, [
                'guardian_name' => 'required|string|max:255',
                'guardian_phone' => 'required|string|max:20',
                'relationship' => 'required|string|max:255',
            ]);
        }

        return $rules;
    }
}
