// Define the UserLogin interface
export interface UserLogin {
  username: string;
  password: string;
}

// Function to send a POST request to the '/auth/login' endpoint with user login information
const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { login };  // Export the login function to be used elsewhere in the application