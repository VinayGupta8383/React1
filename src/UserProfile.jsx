import style from './css/UserProfile.modul.css'
function UserProfile(){
    return(
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div>
               <img className='img-style' src={myPhoto} alt="My Photo" width="200px" />
                <div>
                  <h4>vinay</h4>
                  <p>Software Developer</p>
                </div>
            </div>
        </div>
    )
}
export default UserProfile