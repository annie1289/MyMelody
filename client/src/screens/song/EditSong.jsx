import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function EditSong(props) {
  const [formData, setFormData] = useState({
    name: '',
    imgURL: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const songItem = props.songs.find(song => song.id === Number(id));
      setFormData({
        name: songItem.name,
        imgURL: songItem.imgURL
      })
    }
    if (props.songs.length){
      prefillForm();
    }
  }, [props.songs])

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
      props.newUpdate(id, formData);
    }}>
      <label>Name:
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
      <button>Submit</button>
    </form>
  )
}