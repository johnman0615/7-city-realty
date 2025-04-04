export interface UserLogin {
  username: string;
  password: string;
}

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      throw new Error("Login failed");
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { login };