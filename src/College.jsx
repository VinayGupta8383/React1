 const College=({college})=>{
    console.log(college);
    return(
        <div style={{
           backgroundColor:"#ccc",
           padding:"20px",
           borderBottom:"2px solid #000",
           margin:"20px",
           borderRadius:"10px" 
        }}>
        <h1>Name: {college.name}</h1>
              <ul>
                <li>
                  <h3>City: {college.city}</h3>
                </li>
                <li>
                 <h3>website:{college.city}</h3>
                </li>
                <li>
                   <h3>Students</h3> 
                    {
                        college.student.map((student)=>(
                       <ul>
                        <li>Name:{student.name}</li>
                       </ul>  
                        ))
                    }
                </li>
              </ul>
        </div>
    )
 }
 export default College