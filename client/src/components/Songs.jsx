import React from 'react'
import './artists/Artists.css'
export default function Songs(props) {
  // USE this component to generate the top song charts later
  return (
    <div className = "songs">
    <h3>Songs</h3> <br/>
{
        props.songs.map(song => (
      <div>
      <p key={song.id}>{song.name}</p>
      <p>{song.album}</p>
      <img src={song.imgURL} alt = "song img" key={song.imgURL.id}/>

      </div>
    ))
      }
      </div>
  )
}