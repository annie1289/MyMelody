import React from 'react'
import { Link } from 'react-router-dom'

export default function MainLanding() {

  return (
    <div>
      <Link to='/CreateSong'>
        <button className = "create-song">Add Song</button>
      </Link>
      <Link to='/CreateAlbum'>
        <button className = "create-album">Add Album</button>
      </Link>
      
</div>
  )
}



