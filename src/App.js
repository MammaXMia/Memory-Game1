import './App.css';
import { MemoryCard} from './componets/MemoryCard'

function App() {
  return (
    <>
      <div className="App row ">
        <header className="App-header col-12">

          <h1> Memory Game</h1>
          <h2>Match cards to win</h2>

        </header>


        
        <div className='col-12' >
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        <MemoryCard/>
        
        
        
        
        
        
        </div>
        
      <div >
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>


      
      

      </div>

      <div >
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      <MemoryCard/>
      
      
      
      
      
      </div>
      
      </div>
      
      
    </>
  );
}

export default App;
