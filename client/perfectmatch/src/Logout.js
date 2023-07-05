import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Logout = ({ className }) => {
  const { isAuthenticated, logout } = useAuth0();

  const buttonClassName = isAuthenticated ? 'logout-button logged-in' : 'logout-button';

  return (
    <div className="logout-container">
      <button onClick={() => logout({ returnTo: window.location.origin })} className={buttonClassName}>
        Logout
      </button>
    </div>
  );
};

export default Logout;