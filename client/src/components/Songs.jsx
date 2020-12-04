import React from 'react'

export default function Songs(props) {
  
  return (
    <div>
    <h3>Songs</h3>
{
    props.songs.map(song => (
      <p key={song.id}>{song.name}</p>
    ))
      }
      </div>
  )
}