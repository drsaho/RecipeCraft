export const logout = () => {
    localStorage.removeItem('token'); // Remove JWT from local storage
    window.location.href = '/login';  // Redirect to login page
  };