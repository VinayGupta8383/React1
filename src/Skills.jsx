import { useState } from "react";

 function Skills() {
    const[skills,setSkills]=useState([]);
      const handleskills=(event)=>{
        console.log(event.target.value, event.target.checked); 
        if(event.target.checked){
          setSkills([...skills,event.target.value]);
         }else{
            setSkills([...skills.filter((item)=>item != event.target.value)]);
         }
      }
 
  return (
    <div>   
        <h3>Select Your Skills</h3>
        <input onChange={handleskills} type="checkbox" id="php" value="php" />
        <label htmlFor="php">PHP</label><br/>  
 
        <input onChange={handleskills} type="checkbox" id="js" value="JS" />
        <label htmlFor="js">JS</label><br/>

        <input onChange={handleskills}type="checkbox" id="node" value="NODE" /> 
        <label htmlFor="node">NODE</label><br/>

        <input onChange={handleskills}type="checkbox" id="java" value="JAVA"/>
        <label htmlFor="java">JAVA</label><br/> 
          
          <h1>{skills.toString()}</h1>
 
    </div>


  )
}

export default Skills;