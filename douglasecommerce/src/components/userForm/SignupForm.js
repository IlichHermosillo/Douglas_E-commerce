import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/user/signup', formData)
            .then(response => {
                console.log('Signup successful:', response.data);
                // Clear form data after successful signup
                setFormData({
                    firstName: '',
                    lastName: '',
                    username: '',
                    password: ''
                });
            })
            .catch(error => {
                console.error('Error signing up:', error);
            });
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Username (Email):
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Signup</button>
            </form>

        </div>
    );
};

export default SignupForm;
