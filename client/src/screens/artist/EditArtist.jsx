import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AddArtist.css'
export default function EditArtist(props) {
  const [formData, setFormData] = useState({
    name: '',
    imgURL: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const artistItem = props.artists.find(artist => artist.id === Number(id));
      setFormData({
        name: artistItem.name,
        imgURL: artistItem.imgURL
      })
    }
    if (props.artists.length){
      prefillForm();
    }
  }, [props.artists])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="artistBack">
      
    <form className = "artistForm" onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
      }}>
        <h3>Edit Artist</h3>
      <label>Name:
        <input
          className = "artistInput"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label> <br/>
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