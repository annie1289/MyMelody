import React from 'react'
import './artists/Artists.css'
import { Link } from 'react-router-dom'
export default function MySongs(props) {
  
    return (
      <div className = "songs">
        <h3>Songs</h3>
        <br/>
        {
          props.songs.map(song => (
            <div className = "songDetails">
              <h5 key = {song.id}> {song.name}</h5>
              <img src={song.imgURL} alt="song img" key={song.imgURL.id} />
              <div className = "buttons">
              <Link to={`/songs/${song.id}/edit`}><button className = "edit">Edit</button></Link>
              <button onClick={() => props.newDelete(song.id)} className = "delete">Delete</button>
              </div>
        
            </div>
          ))
        }
      </div>
    )
  }