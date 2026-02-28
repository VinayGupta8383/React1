import { useRef } from "react";

function App() {

  const userRef = useRef(null);
  const passwordRef = useRef(null);

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log("Without Ref:", user, password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();
    console.log("With Ref:", userRef.current.value, passwordRef.current.value);
  };

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleForm}>
        <input type="text" id="user" placeholder="enter user name" />
        <br /><br/>
        <input type="password" id="password" placeholder="enter user password" />
        <br /><br />
        <button>Submit</button>
      </form>

      <hr />

      <h1>Uncontrolled Component with userRef</h1>
      <form onSubmit={handleFormRef}>
        <input type="text" ref={userRef} placeholder="enter user name" />
        <br /><br/>
        <input type="password" ref={passwordRef} placeholder="enter user password" />
        <br /><br />
        <button>Submit with ref</button>
      </form>
    </>
  );
}

export default App;