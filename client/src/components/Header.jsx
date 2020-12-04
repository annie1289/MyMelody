import React from 'react'
// import { Link } from 'react-router-dom'
import './Header.css'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

export default function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="header">
      <LibraryMusicIcon className = "icon"/>
      <h1 className = "mainTitle">My Melody</h1>      
      {
        currentUser ?
          <>
            <p className = "userBanner">Nice to see you, {currentUser.username}</p>
            <button onClick={handleLogout} className = "logout">Logout</button>
          </>
          :
          <p className = "intro">Meet your next favorite song</p>
      }
    
    </div>
  )
}


