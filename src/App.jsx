import User from "./User"
function App() {
  const displayName=(name)=>{
    alert(name)
  }
  const getUser=()=>{
    alert("get user function called")
  }
    return (
      <>
        <h1>Call Parent component Function from child component</h1>
        <User displayName={displayName} name="anil" getUser={getUser} />
        <User displayName={displayName} name="sam" getUser={getUser} />
        <User displayName={displayName} name="peter" getUser={getUser} />
        <User displayName={displayName} name="bruce" getUser={getUser} />
      </>
    )
}

export default App;