import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'
export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className = "header">
      <h1 className = "mainTitle">My Melody</h1>      
      {
        currentUser ?
          <>
            <p className = "userBanner">Nice to see you, {currentUser.username}</p>
            <button onClick={handleLogout} className = "logout">Logout</button>
          </>
          :
          <p>Meet your next favorite song</p>
      }
    
    </div>
  )
}


