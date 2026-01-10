import myPhoto from "./my_photo.JPG";

function App() {
    function callfun(){
        alert("function called");
    }
    
    const fruit=()=>{
        alert("apple");
    }
    
    
  return (
    <div>
        <h1>event and function call</h1>
        <button onClick={fruit}>banana</button>
        <button onClick={callfun}>Click Me</button>
        
                 
      
    </div>
    
  )
}

export default App
