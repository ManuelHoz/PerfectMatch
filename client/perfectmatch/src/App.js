
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import Profile from './Profile';
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
        <div className="user-container">
          {isAuthenticated && <Profile />}
        </div>
      </div>
      {!isAuthenticated && (
        <div className="login-container">
          <div className="login-text-container">
            <h2 className="login-text">Inicia sesión para acceder a la aplicación</h2>
          </div>
          <LoginButton />
        </div>
      )}
      {isAuthenticated && (
        <main className="main-container">
          <div className="partidos-container">
            <ListaDePartidos />
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
