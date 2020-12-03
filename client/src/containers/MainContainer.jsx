import React from 'react'
import { Link } from 'react-router-dom'

export default function MainContainer(props) {
  
  return (
    <div>
      <Link to='/editalbum'>   Edit Album   </Link>
     < br/>
  
      <Link to='/addalbum'>Add Album   </Link>
      < br/>
      <Link to='/addsong'>Add Song</Link>
      < br/>
      <Link to='/editsong'>Edit Song</Link>
      < br/>

      <Link to='/charts'>Charts   </Link>

      <Link to='/favorites'>My Favorites    </Link>
      < br/>

     



    </div>
  )
}