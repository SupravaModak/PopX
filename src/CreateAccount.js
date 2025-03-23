// CreateAccount.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles1.css';
const CreateAccount = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: '' // Changed to store "Yes" or "No"
    });


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'radio' ? value : value // Handle radio button value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="container">
            <h2>Create your PopX account</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name* <br></br><br></br>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                </label>
                <label>
                    Phone number*<br></br><br></br>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </label>
                <label>
                    Email address*<br></br><br></br>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Password*<br></br><br></br>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <label>
                    Company name <br></br><br></br>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                </label>
                <div className='radio-group'>
                    <p>Are you an Agency?*</p>
                    <label>
                        <input
                            type="radio"
                            name="isAgency"
                            value="Yes"
                            checked={formData.isAgency === 'Yes'}
                            onChange={handleChange}
                        /> Yes
                        </label>
                        <label>
                        <input
                            type="radio"
                            name="isAgency"
                            value="No"
                            checked={formData.isAgency === 'No'}
                            onChange={handleChange}
                        /> No
                    </label>
                </div>
                <Link to="/account-account">
                <button type="submit">Create Account</button>
                </Link>
            </form>
        </div>
    );
};

export default CreateAccount;