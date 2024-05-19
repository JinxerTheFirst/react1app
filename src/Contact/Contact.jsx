import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        username: '',
        age: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.age || isNaN(formData.age)) newErrors.age = 'Valid age is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (!/(?=.*[A-Z])(?=.*\d).{8,}/.test(formData.password)) {
            newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter and one number';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Submit form data
            console.log('Form data submitted:', formData);
        }
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <h2 className='text-3xl text-gray-900'>CONTACT SECTION</h2>
                <div className="flex items-center justify-center w-full max-w-sm mt-5 mx-auto">
                    <div className="flex-grow border-t-4 border-gray-900"></div>
                    <span className="mx-4 text-gray-900">
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                    <div className="flex-grow border-t-4 border-gray-900"></div>
                </div>
                <form className='flex flex-col items-center space-y-6 mt-10' onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-6 w-full'>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            className={`w-full max-w-lg border-t-0 border-l-0 border-r-0 rounded-xl p-4 text-lg focus:outline-none focus:ring-0 ${errors.username ? 'border-red-500' : ''}`}
                            placeholder='Username' />
                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            className={`w-full max-w-lg border-t-0 border-l-0 border-r-0 rounded-xl p-4 text-lg focus:outline-none focus:ring-0 ${errors.age ? 'border-red-500' : ''}`}
                            placeholder='Age' />
                        {errors.age && <span className="text-red-500">{errors.age}</span>}
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full max-w-lg border-t-0 border-l-0 border-r-0 rounded-xl p-4 text-lg focus:outline-none focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                            placeholder='Email' />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full max-w-lg border-t-0 border-l-0 border-r-0 rounded-xl p-4 text-lg focus:outline-none focus:ring-0 ${errors.password ? 'border-red-500' : ''}`}
                            placeholder='Password' />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>
                    <button type='submit' className='bg-green-400 p-3 rounded-lg text-white self-start'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}
