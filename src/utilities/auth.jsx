// utils/auth.js

// Function to check if the user is authenticated
export const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };
  
  // Function to handle redirecting an authenticated user
  export const redirectToDashboardIfAuthenticated = (navigate) => {
    if (isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  };
  
  // Function to log out a user
  export const logoutUser = (navigate) => {
    localStorage.removeItem('authToken');
    navigate('/signin', { replace: true });
  };
  export const redirectToDashboardAfterAuthentication= (navigate,token)=>{
    localStorage.setItem('authToken', token); // Store the token in local storage
    navigate('/dashboard',{ replace: true });
  }