import logo from './logo.svg';
import { ReactComponent as Logo } from "./logo.svg";
import './App.css';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React!!!</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
