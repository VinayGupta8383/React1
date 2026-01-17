import { useState } from 'react';                    

function App() {
  const [val,setVal]=useState("vinay gupta")

  return (
    <div>
       <h1>Get Input field Value</h1>
       <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="Enter Name" />  
       <h1>{val}</h1> 
       <button onClick={()=>setVal("")}>Clear value</button>    
    </div>
    
  )
}

export default App 