import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

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
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleUpdate(id, formData);
    }}>
      <label>Name:
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