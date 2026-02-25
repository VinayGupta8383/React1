import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert } from "react-bootstrap";

function App() {
  return (
    <>
      <h1>Add Bootstrap in React js</h1>
      <Alert variant="success">Hello, BT installed</Alert>
      <Button onClick={()=>AudioListener("Bootstrap Button")} variant="danger">Bootstrap Button</Button>
      <Button variant="success">OK</Button>
      <Button variant="warning">OK</Button>
      <Button onClick={()=>AudioListener("Bootstrap Button")} variant="danger">Simple Button</Button>
    </>
  );
}

export default App;