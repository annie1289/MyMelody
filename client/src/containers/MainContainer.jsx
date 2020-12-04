import React from 'react'
import { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import Songs from '../components/Songs'
import { getAllSongs } from '../services/songs'
import Artists from '../components/Artists'
import { getAllArtists, postArtist, putArtist, destroyArtist } from '../services/artists'
import AddArtist from '../screens/addartist/AddArtist';
import './MainContainer.css'
import EditArtist from '../screens/EditArtist'
import Footer from '../components/Footer';
import MySongs from '../components/MySongs';
export default function MainContainer(props) {

  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const history = useHistory()

  useEffect(() => {
    const fetchArtists = async () => {
      const artistData = await getAllArtists();
      setArtists(artistData);
    }
    const fetchSongs = async () => {
      const songData = await getAllSongs();
      setSongs(songData);
    }
    fetchArtists();
    fetchSongs();
  }, [props.currentUser])

  const handleCreate = async (artistData) => {
    const newArtist = await postArtist(artistData);
    console.log(newArtist)
    setArtists(prevState => [...prevState, newArtist]);
    history.push('/artists');
    console.log(history)
  }
  const handleUpdate = async (id, artistData) => {
    const updatedArtist = await putArtist(id, artistData);
    setArtists(prevState => prevState.map(artist => {
      return artist.id === Number(id) ? updatedArtist : artist
    }))
    history.push('/artists');
  }
  const handleDelete = async (id) => {
    await destroyArtist(id);
    setArtists(prevState => prevState.filter(artist => artist.id !== id))
  }
  return (
    <div className="main">
       <Route path='/artists/:id/edit'>Edit Artist
         <EditArtist artists={artists} handleUpdate={handleUpdate}/>
      </Route> 
            <br/>
        <Route path='/addartist'>
          <AddArtist handleCreate={handleCreate} />
        </Route>
            <br/>
        <Route path='/artists'>
          <Artists currentUser={props.currentUser} handleDelete={handleDelete} artists={artists}/>
          <MySongs songs={songs} currentUser={props.currentUser} handleDelete={handleDelete}/>
        </Route>
      <Footer/>
    </div>
  )
}