import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="logout-container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '130px' }}>
      <button
        onClick={() => logout()}
        style={{ backgroundColor: 'red', color: 'white', width: '120px', height: '40px', fontSize: '16px' }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
