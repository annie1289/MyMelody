import React from 'react'
import { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import Songs from '../components/Songs'
import { getAllSongs, postSong } from '../services/songs'
import Artists from '../components/artists/Artists'
import { getAllArtists, postArtist, putArtist, destroyArtist } from '../services/artists'
import AddArtist from '../screens/artist/AddArtist';
import './MainContainer.css'
import EditArtist from '../screens/artist/EditArtist'
import Footer from '../components/footer/Footer';
import MySongs from '../components/MySongs';
import CreateSong from '../screens/song/CreateSong';
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

  const newCreate = async (songData) => {
    const newSong = await postSong(songData);
    setSongs(prevState => [...prevState, newSong]);
    history.push('/songs');
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
    <Switch>
      <Route path='/artists/:id/edit'>Edit Artist
         <EditArtist artists={artists} handleUpdate={handleUpdate}/>
        </Route> 
        <Route path='/addartist'>
          <AddArtist handleCreate={handleCreate} />
        </Route>
        <Route path='/addsong'>
          <CreateSong newCreate={newCreate} />
        </Route>
        <Route path='/artists'>
          <Artists currentUser={props.currentUser} handleDelete={handleDelete} artists={artists}/>  
          <MySongs songs={songs} currentUser={props.currentUser} handleDelete={handleDelete}/>
        </Route>
      <Footer/>
      </Switch>
  )
}