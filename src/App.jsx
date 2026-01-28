import './css/style.css'
import myPhoto from "./my_photo.JPG";
function App() {
  
   
  return (
      <>
        <h1 className="heading">External Style</h1>
         <div>
          <div>
            <img className='img-style' src={myPhoto} alt="My Photo"  />
          </div>
          <div>
            <h4>Vinay</h4>
            <p>Software devloper</p>
          </div>
         </div>
      </>
    
  )
}
 
export default App; 