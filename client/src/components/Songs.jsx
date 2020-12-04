import React from 'react'
import './Artists.css'
export default function Songs(props) {
  
  return (
    <div className = "songs">
    <h3>Songs</h3> <br/>
{
        props.songs.map(song => (
      <div>
      <p key={song.id}>{song.name}</p>
      <img src={song.imgURL} alt = "song img" key={song.imgURL.id}/>

      </div>
    ))
      }
      </div>
  )
}