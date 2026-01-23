import College from "./College";

function App() {
   
  const collegeData=[
    {
      name:"IET Ayodhya",
      city:"Ayodhya",
      website:"www.iet.com",
      student:[
        {
          name:"vinay",
          age:'22',
          email:"vinay@test.com"
        },
        {
          name:"abhay",
          age:'22',
          email:"abhay@test.com"
        },
        {
          name:"vipin",
          age:'22',
          email:"vipin@test.com"
        },
      ]
    },

    {
      name:"IET Delhi",
      city:"Delhi",
      website:"www.iit.com",
      student:[
        {
          name:"abhay",
          age:'22',
          email:"abhay@test.com"
        },
      ]
    },
    {
      name:"KCIET Hisar",
      city:"Hisar",
      website:"www.kciet.com",
      student:[
        {
          name:"vipin",
          age:'22',
          email:"vipin@test.com"
        },
      ]
    },
  ]
  return (
    <div>
        <h1>Nested looping with Component</h1>
        {
          collegeData.map((college,index)=>(
            <div key={index}>
              <College college={college}/>
              </div>
          )) 
        }
    </div>
    
  )
}
 
export default App; 