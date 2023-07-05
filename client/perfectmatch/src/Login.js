import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    isAuthenticated && console.log("user: ", user);
    
  }, [loginWithRedirect]);



  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => loginWithRedirect()} style={{ backgroundColor: 'green', color: 'white' }}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;