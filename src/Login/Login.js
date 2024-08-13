import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Make sure to move the CSS to this file

const Login = () => {
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasswordBox = () => {
        setShowPasswordBox(true);
    };

    const handleEyeClick = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordFocus = (e) => {
        e.target.previousSibling.classList.add('password-fixed');
    };

    const handlePasswordBlur = (e) => {
        if (e.target.value.length === 0) {
            e.target.previousSibling.classList.remove('password-fixed');
        }
    };

    const navigate = useNavigate(); // Initialize navigate function

    const handleClick = () => {
        navigate('/sidebar'); // Replace '/sidebar' with your actual path
    };

    return (
        <div className="container">
            <div className="form-container">
                {!showPasswordBox ? (
                    <div id="email-box">
                        <div className="form-header">
                        <h2 onClick={handleClick} style={{ cursor: 'pointer' }}>
                Create a new Account
            </h2>
                        </div>
                        <div className="form-group">
    <input 
        type="text" 
        id="email" 
         placeholder="Sign in with Google"
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
    />
    <label className="form-control-placeholder" htmlFor="email">
        <i className="fab fa-google"></i> Sign in with Google
    </label>
</div>

                        <div className="form-link">
                        <button className="btn">Create an Account</button>
                        </div>
                        <br/>
                        <br/>
                        <div className="link">
                            <label>Already have an account? </label>
                            <label><a href="">Sign In</a></label>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-link">
                            {/* <label><a href="">Create Account</a></label> */}
                            {/* <button className="btn" onClick={handleShowPasswordBox}>Next</button> */}
                        </div>
                    </div>
                ) : (
                    <div id="password-box">
                        <div className="form-header">
                            <img id="logo" src="https://storage.googleapis.com/gd-wagtail-prod-assets/original_images/evolving_google_identity_share.jpg" alt="" />
                            <h2>Welcome</h2>
                            <h4 id="entered-email">{email}</h4>
                        </div>
                        <div className="form-group">
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={handlePasswordFocus}
                                onBlur={handlePasswordBlur}
                            />
                            <label className="form-control-placeholder" htmlFor="password">Enter Your Password</label>
                            <i 
                                className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} 
                                id="eye-icon" 
                                onClick={handleEyeClick}
                            ></i>
                        </div>
                        <br/>
                        <br/>
                        <div className="form-link">
                            <label><a href="">Forgot password?</a></label>
                            <button className="btn">Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
