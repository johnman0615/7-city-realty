import React from 'react';

const ForgotPassword: React.FC = () => {
    return (
        <div className="forgot-password-container">
            <h1>Forgot Password</h1>
            <p>Please contact support to reset your password.</p>

            <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ForgotPassword;