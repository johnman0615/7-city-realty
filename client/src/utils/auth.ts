class AuthService {
  // Check if the user is logged in by retrieving the token from localStorage
  loggedIn() {
    return !!this.getToken();
  }

  // Retrieve the JWT token from localStorage
  getToken(): string | null {
    return localStorage.getItem("id_token");
  }

  // Store the JWT token in localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem("id_token", idToken);
  }

  // Remove the JWT token from localStorage and redirect to the login page
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
  }
}

export default new AuthService();
