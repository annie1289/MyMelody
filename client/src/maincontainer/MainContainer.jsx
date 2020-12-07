import React from 'react'
import { useState, useEffect } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { destroySong, getAllSongs, postSong, putSong } from '../services/songs'
import Artists from '../components/artists/Artists'
import { getAllArtists, postArtist, putArtist, destroyArtist, getCharts } from '../services/artists'
import AddArtist from '../screens/artist/AddArtist';
import './MainContainer.css'
import EditArtist from '../screens/artist/EditArtist'
import Footer from '../components/footer/Footer';
import MySongs from '../components/MySongs';
import CreateSong from '../screens/song/CreateSong';
import EditSong from '../screens/song/EditSong'
import Charts from '../screens/charts/Charts.jsx'

export default function MainContainer(props) {

  const [songs, setSongs] = useState([]);
  const [artists, setArtists] = useState([]);
  const [allArtists, setAllArtists] = useState([]);
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

  useEffect(() => {
    const fetchCharts = async () => {
      const chartsData = await getCharts();
      setAllArtists(chartsData)
    }
    fetchCharts();
  },
  [])

  const handleCreate = async (artistData) => {
    const newArtist = await postArtist(artistData);
    setArtists(prevState => [...prevState, newArtist]);
    history.push('/artists');
  }
  const newCreate = async (songData) => {
    const newSong = await postSong(songData);
    setSongs(prevState => [...prevState, newSong]);
    history.push('/artists');
  }
 
  const handleUpdate = async (id, artistData) => {
    const updatedArtist = await putArtist(id, artistData);
    setArtists(prevState => prevState.map(artist => {
      return artist.id === Number(id) ? updatedArtist : artist
    }))
    history.push('/artists');
  }
  const newUpdate = async (id, songData) => {
    const updatedSong = await putSong(id, songData);
    setSongs(prevState => prevState.map(song => {
      return song.id === Number(id) ? updatedSong : song
    }))
    history.push('/artists');
  }
  const handleDelete = async (id) => {
    await destroyArtist(id);
    setArtists(prevState => prevState.filter(artist => artist.id !== id))
  }

  const newDelete = async (id) => {
    await destroySong(id);
    setSongs(prevState => prevState.filter(song => song.id !== id))
  }

  return (
    <Switch>
      <Route path='/artists/:id/edit'>
        <EditArtist artists={artists} handleUpdate={handleUpdate} />
        <Footer/>
      </Route> 
      <Route path='/songs/:id/edit'>
        <EditSong songs={songs} newUpdate={newUpdate} />
        <Footer/>
        </Route> 
        <Route path='/addartist'>
        <AddArtist handleCreate={handleCreate} />
        <Footer/>
        </Route>
        <Route path='/addsong'>
        <CreateSong artists={artists} newCreate={newCreate} />
        <Footer/>
      </Route>
      <Route path='/charts'>
        <Charts allArtists={allArtists} />
        <Footer/>
        </Route>
        <Route path='/artists'>
          <Artists currentUser={props.currentUser} handleDelete={handleDelete} artists={artists}/>  
          <MySongs songs={songs} currentUser={props.currentUser} newDelete={newDelete}/>
          <Footer/>
      </Route>
      <Footer/>
      </Switch>
  )
}