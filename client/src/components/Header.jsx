import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div>
      <h1>My Melody</h1>      
      {
        currentUser ?
          <>
            <p>Nice to see you, {currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <p>Meet your next favorite song</p>
      }
    
    </div>
  )
}


