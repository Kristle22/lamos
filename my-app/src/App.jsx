import './App.css'
import EntryFilter from './Components/010/EntryFilter'
import OddorEven from './Components/010/OddorEven'
// import { data } from './Components/010_ObjectList/seaPlaners'
import Patchwork from './Components/010/PatchWork.jsx'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h3>The array of seaPlaners:</h3>
          <Patchwork />
          <h3>Even entries:</h3>
          <OddorEven entry='even' />
          <h3>Odd entries:</h3>
          <OddorEven entry='odd' />
          <EntryFilter />
        </div>
      </header>
    </div>
  )
}
export default App
