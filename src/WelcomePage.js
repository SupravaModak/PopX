// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
const WelcomePage = () => {
    return (
        <div className="container">
            <div className='content'>
            <h1>Welcome to PopX</h1>
            <p>Lorem ipsum dolor sit amet, </p>
            <p>consectetur adipiscing elit,</p>
            <div className='button-container'>
                <Link to="/create-account">
                    <button className='create-account-button'>Create Account</button>
                </Link>
                <Link to="/login-account">
                    <button className='login-button'>Already Registered? Login</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default WelcomePage;