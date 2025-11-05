<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
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
            'phone' => ['required', 'numeric','digits:11', 'regex:/(01)[0-9]{9}/', 'unique:users'],
            'email' => 'nullable|string|email|max:255|unique:users',
            //'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password' => ['required',Rules\Password::defaults()],
            //'role' => ['required', Rule::in(['donor', 'wisher', 'leader'])],
            'dob' => 'required|date|before:today',
            'address' => 'nullable|string',
            //'organization' => 'required|string',
            'gender' => ['required', Rule::in(['male', 'female', 'other'])],
            'photo' => 'nullable|image|max:5000', // 5MB max
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ];

        // Add conditional validation for 'wisher'
//        if ($this->role === 'wisher') {
//            $rules = array_merge($rules, [
//                'guardian_name' => 'required|string|max:255',
//                'guardian_phone' => 'required|string|max:20',
//                'relationship' => 'required|string|max:255',
//            ]);
//        }
//        $checkAge = $this->ageCalculate($this->dob);
//        if (($this->role === 'donor') and $checkAge <= 18 ) {
//            $rules = array_merge($rules, [
//                'guardian_name' => 'required|string|max:255',
//                'guardian_phone' => 'required|string|max:20',
//                'relationship' => 'required|string|max:255',
//            ]);
//        }

        return $rules;
    }

//    private function ageCalculate($date)
//    {
//       return Carbon::parse($date)->diffInYears(now());
//    }
}
