import { useState } from 'react';

export default function CreateSong(props) {

  const [songInfo, setSongInfo] = useState({
    name: "",
    album: "",
    imgURL: "",
    artist_id: ""
  
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSongInfo(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log("I am reaching handleCreate")
        props.newCreate(songInfo)
        console.log("I have submitted")

            }}>
      <h3>Add Song</h3>
      <label>Song Name:
        <input
          type='text'
          name='name'
          value={songInfo.name}
          onChange={handleChange}
        />
      </label>
      <label>Album:
        <input
          type='text'
          name='album'
          value={songInfo.album}
          onChange={handleChange}
        />
      </label>
      <label>Song Image:
        <input
          type='text'
          name='imgURL'
          value={songInfo.imgURL}
          onChange={handleChange}
        />
      </label>
        <select defaultValue="default" onChange={handleChange} value = {songInfo.artist_id}>
        <option value="default">Select an Artist</option>
            {props.artists.map(artist => (
          <option value={artist.id} key={artist.id}>{artist.name}</option>
          ))}
        </select>
      <button>Submit</button>
    </form>
    </div>
  )
}