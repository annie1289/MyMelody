import React from 'react'
import { Link } from 'react-router-dom'
import './MainLanding.css'

export default function MainLanding() {

  return (
    <div>
      <Link to='/addsong'>
        <button className = "create-song">Add Song</button>
      </Link>
      <br/>
      <Link to='/addartist'>
        <button className = "create-artist">Add Artist</button>
      </Link>
      
</div>
  )
}



