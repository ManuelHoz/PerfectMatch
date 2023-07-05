import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => loginWithRedirect()} style={{ backgroundColor: 'green', color: 'white' }}>
        Login
      </button>
    </div>
  );
};

export default LoginButton;