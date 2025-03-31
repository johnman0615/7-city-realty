import React from 'react';

const CreateAccount: React.FC = () => {
    return (
        <div className="create-account-container">
            <h1>Create an Account</h1>
            <p>Account creation is currently not available. Please contact support.</p>

            <form>
                <input type="text" placeholder="Furture State" />
                <input type="email" placeholder="Future State" />
                <input type="password" placeholder="Enter your password" />
                <input type="password" placeholder="Confirm your password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default CreateAccount;