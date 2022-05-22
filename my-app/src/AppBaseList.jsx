import './App.css';
import Dogs from './Components/010_BaseList/Dogs';
import OddEven from './Components/010_BaseList/OddEven';
import SortedDogs from './Components/010_BaseList/SortedDogs';
import CapitalGone from './Components/010_BaseList/CapitalGone';
import NameLen from './Components/010_BaseList/NameLen';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Dogs w='100px' h='100px' />
        <SortedDogs r='110px' />
        <OddEven wh='100px' />
        <CapitalGone wh='100px' />
        <NameLen wh='100px' />
      </header>
    </div>
  );
}
export default App;
