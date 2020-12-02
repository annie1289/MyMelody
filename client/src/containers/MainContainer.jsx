import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <Link to='/editalbum'>Edit</Link>
      <Link to ='/login'>Logout</Link>
      <Link to ='/addalbum'>Add Album</Link>
      <Link to ='/charts'>Charts</Link>
      <Link to ='/favorites'>My Favorites</Link>

    </div>
  )
}