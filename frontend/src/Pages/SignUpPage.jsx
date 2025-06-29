import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate signup success
    navigate('/');
  };

  return (
    <div className="signup-container">
      <h1>Helmets & Gears</h1>
      <p className="subtitle">Create your account</p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required />
        
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Create a password" required />
        
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
        
        <div className="terms">
          <label>
            <input type="checkbox" name="terms" required />
            I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>
        
        <button type="submit" className="register-btn">Register</button>
      </form>
      <div className="signin-link">
        <hr />
        <p>Already have an account?</p>
        <button className="signin-btn">Sign in to your account &rarr;</button>
      </div>
    </div>
  );
};

export default SignUpPage;
