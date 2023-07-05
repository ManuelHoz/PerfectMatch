import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <div className="profile-container">
      <div className="profile-content">
        <img className="profile-img" src={user.picture} alt={user.name} />
        <h2 style={{ fontSize: '20px' }}>{user.name}</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => logout()}
            style={{ backgroundColor: 'red', color: 'white', width: '120px', height: '40px', fontSize: '16px' }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Profile;
