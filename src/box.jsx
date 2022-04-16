import React from "react";
import "./App.css"

const ElevatorBox = ({item,arr,activeBox,setActiveBox, clickedNums,setClickedNums}) => {
    console.log(activeBox)
const handleClick = () =>{
    setClickedNums(clickedNums.push())
}
  return (
    <div className="elevatorBox">
    <div>
        <button onClick={()=>activeBox===item&& setTimeout(()=>setActiveBox(activeBox+1),2000) }>up</button>
        <button onClick={()=>activeBox===item&&setActiveBox(activeBox-1)}>down</button>
    </div>
      <div className={`elevator ${activeBox===item&&"active"}`} >
          {activeBox===item&&arr.map(num=><button key={num} onClick={()=>setActiveBox(num)} className={activeBox===num&&"activeSm"}>{num}</button>)}
      </div>
    </div>
  );
};

export default ElevatorBox;
