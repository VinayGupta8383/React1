                


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
      <h1>Loop in JSX with Map Function</h1>
      <table border="1">
    <thead>
       <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        <td>Age</td>
        </tr>
    </thead>
       <tbody>
        {
          userData.map((user)=>(
        <tr key={user.id} >
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.age}</td>
        </tr>
          ))
        }
        </tbody>    

      </table>

      <h1>Dummy Data</h1>
      <table border="1">
         <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
            </tr>
         </thead>
         <tbody>
            <tr>
              <td>1</td>
              <td>vinay</td>
              <td>vinay434@test.com</td>
              <td>28</td>
            </tr>

            <tr>
              <td>1</td>
              <td>vinay</td>
              <td>vinay434@test.com</td>
              <td>28</td>
            </tr>

            <tr>
              <td>1</td>
              <td>vinay</td>
              <td>vinay434@test.com</td>
              <td>28</td>
            </tr>

            <tr>
              <td>1</td>
              <td>vinay</td>
              <td>vinay434@test.com</td>
              <td>28</td>
            </tr>

            <tr>
              <td>1</td>
              <td>vinay</td>
              <td>vinay434@test.com</td>
              <td>28</td>
            </tr>

            <tr>
              <td>1</td>
              <td>vinay</td>
              <td>vinay434@test.com</td>
              <td>28</td>
            </tr>
               
         </tbody>
      </table>

    </div>
    
  )
}
 
export default App; 