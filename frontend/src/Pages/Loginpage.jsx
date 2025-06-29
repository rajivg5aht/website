import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Loginpage.css';

const Loginpage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1>Helmets & Gears</h1>
      <p className="subtitle">Sign in to your account</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email address</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        
        <div className="login-options">
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <a href="#" className="forgot-password">Forgot your password?</a>
        </div>
        
        <button type="submit" className="login-btn">Login</button>
      </form>
      <div className="create-account">
        <hr />
        <p>New to Helmets & Gears?</p>
        <Link to="/signup">
          <button className="create-account-btn">Create an account &rarr;</button>
        </Link>
      </div>
    </div>
  );
};

export default Loginpage;
