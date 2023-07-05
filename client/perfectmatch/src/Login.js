import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    isAuthenticated && console.log("user: ", user);
  }, [isAuthenticated, user]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        <button
          onClick={() => loginWithRedirect()}
          style={{
            backgroundColor: 'green',
            color: 'white',
            fontSize: '18px',
            width: '200px',
            height: '50px',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
