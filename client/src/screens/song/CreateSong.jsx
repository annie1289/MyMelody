import { useRadioGroup } from '@material-ui/core';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreateSong(props) {
  const [formData, setFormData] = useState({
    name: "",
    imgURL: "",
    artist: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("I am reaching handleCreate")
      props.newCreate(formData);
      console.log("I have submitted")
    }}>
      <h3>Add Song</h3>
      <label>Song Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>Song Image:
        <input
          type='text'
          name='imgURL'
          value={formData.imgURL}
          onChange={handleChange}
        />
      </label>

      <label>Artist:
        <input
          type='text'
          name='artist'
          value={formData.artist}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}