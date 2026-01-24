<?php

namespace App\Http\Requests;

use App\Models\Organization;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateOrganizationRequest extends FormRequest
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
        $currentId = Request::segment(3);
        $organization = Organization::find($currentId);
        return [
            'name' => [
                ['required','string','name'],
                Rule::unique('organizations')->ignore($currentId),
            ],
            'contact_email' => [
                ['required','string','contact_email'],
                Rule::unique('organizations')->ignore($currentId),
            ],
//            'contact_email' => [
//                ['required','string','email'],
//                Rule::unique('users')->ignore($organization->id),
//            ],

            'contact_phone' => [
                ['required','string','contact_phone'],
                Rule::unique('organizations')->ignore($currentId),
            ],
//            'contact_phone' => [
//                ['required','string','phone'],
//                Rule::unique('users')->ignore($organization->id),
//            ],
            'address' => 'nullable|string',
            'image' => 'nullable|image|max:5000', // 5MB max
        ];
    }
}
