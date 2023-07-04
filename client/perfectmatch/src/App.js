import logo from './logo.svg';
import './App.css';
import { LoginButton } from './Login';
import ListaDePartidos from './componentes/ListaDePartidos';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header>
        <LoginButton />
      </header>
      <body>
        <ListaDePartidos />
      </body>
    </div>
  );
}

export default App;
