import { useRadioGroup } from '@material-ui/core';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CreateSong(props) {
  const [formData, setFormData] = useState({
    name: "",
    imgURL: "",
    album: "",
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
      props.handleCreate(formData);
      console.log("I have submitted")
    }}>
      <h3>Add Artist</h3>
      <label>Artist Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>Artist Image:
        <input
          type='text'
          name='imgURL'
          value={formData.imgURL}
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  )
}