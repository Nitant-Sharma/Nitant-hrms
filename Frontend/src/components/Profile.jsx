import React from 'react'
import second from '../assets/second.jpg' 
import "bootstrap-icons/font/bootstrap-icons.css"
function Profile() {
  return (
    <div className='profile'>
      <h1 className='heading'>My Profile</h1>
      <div className='img'>
      <img className='img1' src={second}/>
      </div>
      <h2>Mariya Aryan</h2>
      <div className='h1'>
      <div className='doc'>
        <h5 className='emails'>mariyaaryan@example.com</h5>
       <button className='btn'>Edit Profile</button>
      </div>
      <div className='details'> 
        <ul className='nav- nav-pills flex-column'>
        <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Latest Feed</h5>
        </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Latest Update</h5>
        </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Language</h5>
        </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
          <h5>Location</h5>
          </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Files and Documents</h5>
        </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Display</h5>
        </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Recently Deleted</h5>
        </li>
          <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Clear History</h5>
        </li>
         <li className='nav-item'>
        <i className='bi bi-speedometer'></i>
        <h5>Exit</h5>
        </li>
      </ul>
      </div>
      </div>
      <div className='Edit'>
      <h1 className='headings'>Edit Profile</h1>
            <div className='pro'>
            <img className='img1' src={second}></img>
            <h3 className='h3'>Maria Aryan</h3>
            <h5 className='email'>mariyaaryan@example.com</h5>
            <h2 className='h2'>Enter Details -</h2>
          </div>
          <div className='body'>
             <p>First Name:</p>
             <input type='text' placeholder=' '/>
             <p>Last Name:</p>
             <input type='text' placeholder=' '/>
             <p>Username:</p>
             <input type='text' placeholder=' '/>
             <p>Email:</p>
             <input type='email' placeholder=' '/>
             <p>Mobile:</p>
             <input type='number' placeholder=' '/>
             <p>Birth:</p>
             <input type='date' placeholder=''/>
             <p>Gender:</p>
             <input className='ch' type='checkbox'/>Male<br/>
             <input className='ch1' type='checkbox'/>Female
             <div className='button'>
             <button className='btns'>Cancel</button>
             <button className='btns'>Save</button>
             </div>
          </div>
    </div>
    </div>
 )
}

export default Profile

