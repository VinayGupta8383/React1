import { useState } from "react";

import College from "./College"
import Student from "./Student"
import User from "./User"

function App() {
  // let userName = "vinay gupta"
  // let age = 29
  // let email = "vinay@example.com"
  let userObject = {
    name: "vinay gupta",
    age: 29,
    email: "vinay@example.com"
  }

  let userObject2 = {
    name: "john doe",
    age: 25,
    email: "john@example.com"
  }

  let userObject3 = {
    name: "jane smith",
    age: 28,
    email: "jane@example.com"
  }

  let collegeNames = ['harvard', 'mit', 'stanford']
  const [student, setStudent] = useState()

  return (
    <div>
       <h1>props in react</h1>
       {student && <Student name="student"/>}
       <button onClick={()=>setStudent("bhasker")}>Update student name</button>
      {/* <User name={userName} age={age} email={email} /> */}
      {/* <College name={collegeNames[0]} />
      <College name={collegeNames[1]} />
      <College name={collegeNames[2]} /> */}



      <User user= {userObject} />
      <User user= {userObject2} />
      <User user= {userObject3} />
      
    </div>
    
  )
}

export default App 