import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {

  return (
    <div className="footer">
        <Link to ='/home'><button className = "homeb">Home</button> </Link>
        <Link to = '/artists'><button className = "favb">My Favorites</button> </Link>
        <Link to='/charts'><button className = "chartb">Charts</button></Link>
    </div>
  
  )
}



