import logo from './logo.svg';
import './App.css';
import ListaDePartidos from './componentes/ListaDePartidos';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <ListaDePartidos />
      </body>
    </div>
  );
}

export default App;
