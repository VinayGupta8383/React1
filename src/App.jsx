import {useEffect, useState} from "react";

function App() {
   
  const [counter,setCounter]=useState(0);
  const [data,setData]=useState(0);


  useEffect(()=>{
    //callonce();
    counterFunction();
  },[counter])

  counterFunction();
  function counterFunction(){
    console.log("counterFunction",counter);
  }



    function callonce(){
       console.log("callonce function called");
  }
   //callonce();
  return (
    <div>
        <h1>useEffect Hook</h1>
        <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
        <button onClick={()=>setData(data+1)}>Data {data}</button>
    </div>
    
  )
}
 
export default App; 