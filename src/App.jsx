import styled from "styled-components"
function App() {
  
  // const Heading =styled.h1`
  // color:red;
  // border:1px solid green;
  // border-radius:5px;
  // margin:20px;
  // padding:20px
  // `

  const Heading=styled.h1({
    color:'red',
    border:'1px solid green',
    borderRadius:'5px',
    margin:'20px',
    padding:'20px'
  })
  
  const StyleBtn=styled.button`
  color:red;
  width:130px;
  height:40px;
  margin:20px
  ` 


  return (
      <>
        <h1>Style component with React js</h1>
        <Heading>Hello Heading 1</Heading>
        <Heading>Hello Heading 2</Heading>
        <Heading>Hello Heading 3</Heading>
        <Heading>Hello Heading 4</Heading>
        <StyleBtn>Login</StyleBtn>
        <StyleBtn>Signup</StyleBtn>
        <StyleBtn>Back</StyleBtn>
        <StyleBtn>Login</StyleBtn>
      </>
    
  )
}
 
export default App; 