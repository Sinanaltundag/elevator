
import "./App.css"

const ElevatorBox = ({item,arr,activeBox,setActiveBox, clickedNums,setClickedNums}) => {
    const handleClick = (num) =>{
        setClickedNums([...clickedNums,num])
       
}


  return (
    <div className="elevatorBox">
    <div>
        <button onClick={()=>activeBox===item&&item<5&& setTimeout(()=>setActiveBox(activeBox+1),1000) }>up</button>
        <button onClick={()=>activeBox===item&&item>0&&setTimeout(()=>setActiveBox(activeBox-1),1000)}>down</button>
    </div>
      <div className={`elevator ${activeBox===item&&"active"}`} >
          {activeBox===item&&arr.map(num=><button key={num} onClick={()=>handleClick(num)} className={activeBox===num?"activeSm":null}>{num}</button>)}
      </div>
    </div>
  );
};

export default ElevatorBox;
