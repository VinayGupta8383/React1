
import{ useState } from "react"

function App() {
  const [display,setDisplay] = useState(true)  
  
  
  

  return (
    <>
       <h1>Toggle in React js</h1>  
       <button onClick={()=>setDisplay(!display)}>Toggle</button>        
       
       {
        display? <h1>vinay</h1>:<h1>no user name</h1>
}
      
    </>
    
  )
}

export default App
