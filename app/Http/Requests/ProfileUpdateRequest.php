<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
            'phone' => ['required', 'numeric','digits:11', 'regex:/(01)[0-9]{9}/',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
            'dob' => 'required|date|before:today',
            'address' => 'nullable|string',
            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
            'photo' => 'nullable|image|max:5000', // 5MB max
            'latitude' => 'nullable|numeric',
            'longitude' => 'nullable|numeric',
        ];
    }
}
