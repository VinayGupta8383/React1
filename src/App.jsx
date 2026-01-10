import myPhoto from "./my_photo.JPG";

function App() {
    const name = "vinay"
    const userobj = {
      name: "vinay",
      email:"vinay@gmail.com",  
      age: 22,
      city : "hyd"
      
    }
    const userArray = ["vinay", "ajay", "vijay"];
    let age = 22;
    let e = 32;
    let path="./my_photo.jpg";
    function friut(){
      return "mango"
    }

    function add(a,b){
      return a+b;
    }

    function operation(a,b, op){
      if(op == "+"){
        return a+b;
      }else if(op == "-"){
        return a-b;
      }else{
        return "a*b"
      }
    }
  return (
    <div>
      <h1>jsx with curly braces</h1>
      <h1>{name}</h1>
      <h1>{age+e}</h1>
      <h1>{friut()}</h1>
      <h1>{add(5,6)}</h1>
      <h1>{userobj.name}</h1>
      <h1>{userArray[1]}</h1>
      <h1>{userobj.city}</h1>
      <img 
      src={myPhoto} alt="my photo"           
      
      />
    </div>
    
  )
}

export default App
