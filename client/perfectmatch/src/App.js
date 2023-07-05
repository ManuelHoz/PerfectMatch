import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import Profile from './Profile';
import LogoutButton from './Logout';
import ListaDePartidos from './componentes/ListaDePartidos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function App() {
  const { isAuthenticated, user } = useAuth0();
  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated);
    console.log("user: ", user);
  }, [isAuthenticated, user]);

  return (
    <div className="App">
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="auth-buttons-container">
          {isAuthenticated && <Profile />}
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        
      </div>
      <main className="main-container"> {/* Agregar una nueva clase "main-container" */}
        <div className="partidos-container">
          <ListaDePartidos />
        </div>
      </main>
    </div>
  );
}

export default App;
