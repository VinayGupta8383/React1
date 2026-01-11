import {useState} from "react";   //hooks
const Counter=()=>{
    const [count,setCount]=useState(0);     // state 
    const [rCounter,setRCounter]=useState(10)  //state
    return(
        <div>
            <h1>Counter:{count} </h1>
            <h2>R Counter:{rCounter}</h2>
            <button onClick={() =>setCount(count+1)}>Update Counter</button>
            <button onClick={() =>setRCounter(rCounter-1)}>Update R Counter </button>
        </div>
    )
}

export default Counter;