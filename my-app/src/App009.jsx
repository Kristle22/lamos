import logo from './logo.svg';
import './App.css';
import Hello from './Components/009/Hello';
import Kurmis from './Components/009/Kurmis';
import Zuikis from './Components/009/Zuikis';
import Tekstas from './Components/009/Tekstas';
import ZebBeb from './Components/009/Zeb&Beb';
import Skyrius from './Components/009/Skyrius';
import Antraste from './Components/009/Antraste';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Hello spalva='green' bg='yellow' />
        <Hello spalva='black' bg='white' />
        <Hello spalva='gray' bg='pink' />
        <Kurmis skaicius={6} />
        <Zuikis spalva='pink' />
        <Tekstas h1Txt='Cia irasykite bet koki teksta...' />
        <ZebBeb spalva={1} />
        <Skyrius h1='Skyriaus pavadinimas' h2='Poskyrio pavadinimas' />
        <Antraste h1text='Spalvotas knygos pavadinimas' spalva='orange' />
        <Antraste h2text='Spalvoti skyriu pavadinimai' spalva='greenyellow' />
      </header>
    </div>
  );
}
export default App;
