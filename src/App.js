
import { useEffect, useRef, useState } from 'react';
import './App.css';
import ElevatorBox from './box';

function App() {
const [activeBox, setActiveBox] = useState(0)
const [clickedNums, setClickedNums] = useState([0])
const aclick = useRef([])
  const arr=[0,1,2,3,4,5]
  
  // setClickedNums(activeBox>1?clickedNums.sort((a, b) => a - b):[0])
  const output = clickedNums.reduce((prev, curr) => Math.abs(curr - activeBox) < Math.abs(prev - activeBox) ? curr : prev);
  console.log(output)
  
  useEffect(() => {
    setActiveBox(output)
    if (clickedNums.length>1) {
      setTimeout(() => {
     setClickedNums(clickedNums.slice(1,clickedNums.length))
   }, 2000);
    }
    
    console.log(clickedNums)
    }, [clickedNums])

  return (
    <div className="App">
    {arr.map(item =>
      (<ElevatorBox key={item} item={item} arr={arr} activeBox={activeBox} setActiveBox={setActiveBox} clickedNums={clickedNums} setClickedNums={setClickedNums}  aclick={aclick}/>)
    )}
  
    </div>
  );
}

export default App;
