                
import User from "./User";
function App() {
   

  const userData=[
    {
      name:'vinay',
      age:'28',
      email:"vinay434@test.com",
      id:1
    },

    {
      name:'sam',
      age:'28',
      email:"sam434@test.com",
      id:2
    },

    {
      name:'peter',
      age:'28',
      email:"peter434@test.com",
      id:3
    },

    {
      name:'bruce',
      age:'28',
      email:"bruce434@test.com",
      id:4
    },
  ] 
  
  return (
    <div>
      <h1>Reuse Component in Loop</h1>
      {
       userData.map((user)=>(
       <div key={user.id}>   
        <User data={user}/>
       </div> 
       )) 
      }
       </div>
    
  )
}
 
export default App; 