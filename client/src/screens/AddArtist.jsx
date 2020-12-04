import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddArtist(props) {
  console.log(props)
  const [formData, setFormData] = useState({
    name: "",
    imgURL: ""
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
      <Link to={`/artists`}><button>Submit</button></Link>
    </form>
  )
}