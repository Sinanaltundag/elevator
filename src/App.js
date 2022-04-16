
import { useState } from 'react';
import './App.css';
import ElevatorBox from './box';

function App() {
const [activeBox, setActiveBox] = useState(0)
const [clickedNums, setClickedNums] = useState([])
  const arr=[0,1,2,3,4,5]

  return (
    <div className="App">
    {arr.map(item =>
      (<ElevatorBox key={item} item={item} arr={arr} activeBox={activeBox} setActiveBox={setActiveBox} clickedNums={clickedNums} setClickedNums={setClickedNums} />)
    )}
  
    </div>
  );
}

export default App;
