import { useState } from 'react';
import './CreateSong.css'
export default function CreateSong(props) {

  const [songInfo, setSongInfo] = useState({
    name: "",
    album: "",
    imgURL: "",
    artist_id: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setSongInfo(prevState => ({
      ...prevState,
      [name]: value
    }
    ))
  }

  return (
    <div>
      <form className = "songForm" onSubmit={(e) => {
        e.preventDefault()
        props.newCreate(songInfo)
      }}>
      <h3>Add Song</h3>
      <label>Song Name:
        <input
          className = "songInput"
          type='text'
          name='name'
          value={songInfo.name}
          onChange={handleChange}
        />
      </label> <br/>
      <label className = "albumLabel">Album:
        <input
          className = "albumInput"
          type='text'
          name='album'
          value={songInfo.album}
          onChange={handleChange}
        />
      </label> <br/>
      <label>Song Image:
        <input
          className = "songInput"
          type='text'
          name='imgURL'
          value={songInfo.imgURL}
          onChange={handleChange}
        />
      </label>
        <select onChange={handleChange} name = 'artist_id' value={songInfo.artist_id}>
        <option value='pineapple'>Select an Artist</option>
            {props.artists.map(artist => (
              <option value={artist.id}>{artist.name}</option>
          ))}
        </select> <br/>
      <button className = "songSub">Submit</button>
    </form>
    </div>
  )
}