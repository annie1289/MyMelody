import React from 'react'
import './artists/Artists.css'
import { Link } from 'react-router-dom'
export default function MySongs(props) {
  
    return (
      <div className = "songs">
        <h3 className = "songz">Songs</h3>
        <br/>
        {
          props.songs.map(song => (
            <div className="songDetails">
              <img src={song.imgURL} alt="song img" key={song.imgURL.id} className = "songImage"/>
              <h5 key={song.id}> {song.name}</h5> <br/>
              <p>Album: {song.album}</p>
              <p>Artist: {song.artist?.name}</p>
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