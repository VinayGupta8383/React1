
import{ useState } from "react";
import Counter from "./counter";
function App() {
  const [fruit,setfruit] = useState("Apple");  
  const handleFruit =()=>{
    setfruit("Mango");
  }
  
  

  return (
    <div>
        <h1>State in React  Js</h1>
        
      <h1>{fruit}</h1> 
      <button onClick={handleFruit}>Change Fruit Name</button>
       <Counter />          
       
      
    </div>
    
  )
}

export default App
