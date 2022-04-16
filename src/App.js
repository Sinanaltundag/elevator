
import { useEffect, useRef, useState } from 'react';
import './App.css';
import ElevatorBox from './box';

function App() {
const [activeBox, setActiveBox] = useState(0)
const [clickedNums, setClickedNums] = useState([0])
const aclick = useRef([])
  const arr=[0,1,2,3,4,5]
  
  // setClickedNums(activeBox>1?clickedNums.sort((a, b) => a - b):[0])

  
  useEffect(() => {
    if (clickedNums.length>0) {
      setClickedNums(clickedNums.sort((a, b) => a - b))
      console.log(clickedNums)
      setTimeout(() => {
    setActiveBox(clickedNums[0])
     setClickedNums(clickedNums.slice(1,clickedNums.length))
   }, 1500);
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
