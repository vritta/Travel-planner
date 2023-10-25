import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);
  function removeTourHandler(id){
    const newTours = tours.filter((tour)=> tour.id !== id);
    setTours(newTours); 
    // console.log(Object.values(tours));
    // console.log(tours.filter((tour)=>tour.id != id));
    // console.log(this);
  }
  
  if(tours.length === 0){
    return(
      <div className="refresh w-screen h-screen bg-green-100 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-[24px] font-bold mb-3">No Tours Left</h2>
          <button className="btn-white w-[180px] h-8 rounded-sm text-[14px] text-center bg-amber-400 hover:bg-lime-400"
           onClick={()=>setTours(data)}>Refresh</button>
        </div>
      </div>
    )
  }
  return (
  <div className="wrapper w-screen h-screen bg-green-100">
    <Tours tours={tours} removeTourHandler={removeTourHandler}></Tours>
  </div>
  );
};

export default App;
