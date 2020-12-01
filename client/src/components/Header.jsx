import React from 'react'
export default function Layout(props) {
  return (
    <div>
      <h1>My Melody</h1>
      {props.children}
    </div>
  )
}