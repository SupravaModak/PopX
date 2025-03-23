import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles2.css'; // Import the CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
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
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="signin-container">
            <div className="signin-content">
                <h2>Sign in to your PopX account</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            required
                        />
                    </div>
                    <Link to="/account-account">
                    <button type="submit" className="login-button">Login</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;