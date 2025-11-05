<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
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
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'nullable',
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

        // Add conditional validation for 'wisher'
        if ($this->user()->role === 'wisher') {
            $rules = array_merge($rules, [
                'guardian_name' => 'required|string|max:255',
                'guardian_phone' => 'required|string|max:20',
                'relationship' => 'required|string|max:255',
            ]);
        }
        $checkAge = $this->ageCalculate($this->dob);
        if (($this->user()->role === 'donor') and $checkAge <= 18 ) {
            $rules = array_merge($rules, [
                'guardian_name' => 'required|string|max:255',
                'guardian_phone' => 'required|string|max:20',
                'relationship' => 'required|string|max:255',
            ]);
        }
        return $rules;
    }

    private function ageCalculate($date)
    {
        return Carbon::parse($date)->diffInYears(now());
    }

}
