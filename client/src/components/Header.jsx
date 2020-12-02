import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
  return (
    <div>
      <h1>My Melody</h1>
      <Link to ='/login'>Login</Link>
    </div>
  )
}