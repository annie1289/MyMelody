import { useState } from 'react'
import './AddArtist.css'

export default function AddArtist(props) {
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
    <div className = "artistBack">
    <form className = "artistForm" onSubmit={(e) => {
      e.preventDefault();
      console.log("I am reaching handleCreate")
      props.handleCreate(formData);
      console.log("I have submitted")
    }}>
      <h3>Add Artist</h3>
      <label>Artist Name:
        <input
          className = "artistInput"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>Artist Image:
        <input
          className = "artistInput"
          type='text'
          name='imgURL'
          value={formData.imgURL}
          onChange={handleChange}
        />
      </label> <br/>
      <button className="artistSub">Submit</button>
      </form>
      </div>
  )
}