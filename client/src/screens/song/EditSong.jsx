import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../artist/AddArtist.css'

export default function EditSong(props) {
  const [formData, setFormData] = useState({
    name: '',
    album: '',
    imgURL: ''
  })
  const { id } = useParams();

  useEffect(() => {
    const prefillForm = () => {
      const songItem = props.songs.find(song => song.id === Number(id));
      setFormData({
        name: songItem.name,
        album: songItem.album,
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
    <div className="artistBack">
    <form className = "artistForm" onSubmit={(e) => {
      e.preventDefault();
      props.newUpdate(id, formData);
      }}>
      <h3>Edit Song</h3>

      <label>Name:
        <input
          className = "artistInput"
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
      </label> <br/>
      <label>Album:
        <input
          className = "artistInput"
          type='text'
          name='album'
          value={formData.album}
          onChange={handleChange}
        />
      </label> <br/>
      <label>Song Image:
        <input
          className = "artistInput"
          type='text'
          name='imgURL'
          value={formData.imgURL}
          onChange={handleChange}
        />
      </label> <br/>
      <button>Submit</button>
      </form>
      </div>
  )
}