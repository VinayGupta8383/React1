   import { useState } from 'react'              

function App() {
  const [name,setName]=useState(' ');
  const [password,setPassword]=useState(' ');
  const [email,setEmail]=useState(' ');
  return (
    <div>
       <h1>Controller Component</h1>
       <form action="get">   
         <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="enter name" />
          <br />
          <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="enter password" />
          <br />
          <input type="email"  onChange={(event)=>setEmail(event.target.value)} placeholder="enter email" />
  
          <br />
          <button>Submit</button>

          <button onClick={()=>{setEmail('')}}>clear</button>

          <h3>{name}</h3>  
          <h3>{password}</h3>
          <h3>{email}</h3>
         </form>
    </div>
    
  )
}

export default App 