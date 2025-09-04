import React, { useState } from "react";

export default function Register() {
    // State to manage the selected role
    const [role, setRole] = useState('donor');

    // State to manage all form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        dob: '',
        address: '',
        organization: '',
        photo: null,
        gender: '',
        guardian_name: '',
        guardian_phone: '',
        relationship: '',
        password: '',
        password_confirmation: '',
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value
        }));
    };

    const submit = (e) => {
        e.preventDefault();

        // This is where you would handle the form submission, for example, by making an
        // Axios request to your Laravel backend.
        // const formPayload = new FormData();
        // for (const key in formData) {
        //     formPayload.append(key, formData[key]);
        // }
        // formPayload.append('user_type', role);
        // axios.post(route('register'), formPayload)
        //     .then(response => console.log(response))
        //     .catch(error => console.error(error));

        console.log('Form data submitted:', { ...formData, user_type: role });
        // For demonstration, we'll just log the data.
    };

    // Component for reusable form fields
    const FormField = ({ id, label, type = 'text', value, onChange, placeholder, required = false, ...props }) => (
        <div className="mt-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
                {...props}
            />
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 font-sans antialiased">
            <div className="container w-full lg:w-1/2 xl:w-1/2 mx-auto px-4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold section-title">Join Our Community</h2>
                        <p className="text-lg text-gray-600 mt-2">Create an account to start sharing or making wishes</p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="px-6 pb-8">
                            <h3 className="text-xl font-semibold mb-4">I want to:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div
                                    onClick={() => setRole('donor')}
                                    className={`role-option bg-gray-100 rounded-xl p-5 text-center cursor-pointer border-2 transition-colors ${role === 'donor' ? 'border-green-400 shadow-md' : 'border-gray-200 hover:border-green-300'}`}
                                >
                                    <div className="text-4xl mb-3">🎁</div>
                                    <h4 className="font-semibold">Donate</h4>
                                    <p className="text-sm text-gray-600 mt-2">Share items with children in need</p>
                                </div>

                                <div
                                    onClick={() => setRole('wisher')}
                                    className={`role-option bg-gray-100 rounded-xl p-5 text-center cursor-pointer border-2 transition-colors ${role === 'wisher' ? 'border-orange-400 shadow-md' : 'border-gray-200 hover:border-orange-300'}`}
                                >
                                    <div className="text-4xl mb-3">✨</div>
                                    <h4 className="font-semibold">Make a Wish</h4>
                                    <p className="text-sm text-gray-600 mt-2">Request items you need</p>
                                </div>

                                <div
                                    onClick={() => setRole('leader')}
                                    className={`role-option bg-gray-100 rounded-xl p-5 text-center cursor-pointer border-2 transition-colors ${role === 'leader' ? 'border-blue-400 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
                                >
                                    <div className="text-4xl mb-3">🌟</div>
                                    <h4 className="font-semibold">Lead a Community</h4>
                                    <p className="text-sm text-gray-600 mt-2">Organize sharing in your area</p>
                                </div>
                            </div>

                            {/* Common Fields for all roles */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField id="name" label="Full Name" value={formData.name} onChange={handleInputChange} required />
                                <FormField id="mobile" label="Mobile" type="tel" value={formData.mobile} onChange={handleInputChange} required />
                                <FormField id="email" label="Email (optional)" type="email" value={formData.email} onChange={handleInputChange} />
                                <FormField id="dob" label="Date of Birth" type="date" value={formData.dob} onChange={handleInputChange} />

                                <div>
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <FormField id="organization" label="Organization/School (optional)" value={formData.organization} onChange={handleInputChange} />
                                <FormField id="address" label="Address" value={formData.address} onChange={handleInputChange} required />

                                <div>
                                    <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo (optional)</label>
                                    <input
                                        type="file"
                                        id="photo"
                                        name="photo"
                                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-600 hover:file:bg-green-100"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <FormField id="password" label="Password" type="password" value={formData.password} onChange={handleInputChange} required />
                                <FormField id="password_confirmation" label="Confirm Password" type="password" value={formData.password_confirmation} onChange={handleInputChange} required />
                            </div>

                            {/* Wisher-specific fields (Conditional Rendering) */}
                            {role === 'wisher' && (
                                <div className="border-t border-gray-200 pt-6 mt-6">
                                    <h3 className="text-xl font-semibold mb-4">Guardian Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField id="guardian_name" label="Guardian Name" value={formData.guardian_name} onChange={handleInputChange} required />
                                        <FormField id="guardian_phone" label="Guardian Phone" type="tel" value={formData.guardian_phone} onChange={handleInputChange} required />
                                    </div>
                                    <div className="mt-6">
                                        <label htmlFor="relationship" className="block text-sm font-medium text-gray-700">Relationship with Child</label>
                                        <select
                                            id="relationship"
                                            name="relationship"
                                            value={formData.relationship}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1"
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value="">Select Relationship</option>
                                            <option value="parent">Parent</option>
                                            <option value="grandparent">Grandparent</option>
                                            <option value="sibling">Sibling</option>
                                            <option value="aunt/uncle">Aunt/Uncle</option>
                                            <option value="legal-guardian">Legal Guardian</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-gray-200 pt-6">
                                <div className="flex items-start mb-4">
                                    <input type="checkbox" id="terms" className="mt-1 mr-3 h-5 w-5 text-indigo-500 focus:ring-indigo-500 rounded" required />
                                    <label htmlFor="terms" className="text-gray-700">I agree to the <a href="#" className="text-indigo-500 hover:underline">Terms of Service</a> and <a href="#" className="text-indigo-500 hover:underline">Privacy Policy</a></label>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <input type="checkbox" id="guardian-approval" className="mt-1 mr-3 h-5 w-5 text-indigo-500 focus:ring-indigo-500 rounded" required />
                                <label htmlFor="guardian-approval" className="text-gray-700">My guardian has approved my use of this platform</label>
                            </div>


                            <div className="flex items-center justify-end">
                                <a href="#" className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Already registered?
                                </a>

                                <button type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-4">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
