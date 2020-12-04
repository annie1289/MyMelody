import React from 'react'
import { useState, useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import Songs from '../components/Songs'
import { getAllSongs } from '../services/songs'
import Artists from '../components/Artists'
import { getAllArtists, postArtist } from '../services/artists'
import AddArtist from '../screens/AddArtist';

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
  }, [])

  const handleCreate = async (artistData) => {
    const newArtist = await postArtist(artistData);
    console.log(newArtist)
    setArtists(prevState => [...prevState, newArtist]);
    history.push('/artists');
    console.log(history)
  }

  return (
    <div>
  
      <Route path='/editartist'>Edit Artist</Route>
      < br/>
      <Route path='/addartist'>
        <AddArtist handleCreate={handleCreate} />
      </Route>
      < br/>
      <Route to='/addsong'>

      </Route>
      < br/>
      <Route to='/editsong'>

      </Route>
      < br/>
      <Route to='/charts'>

      </Route>
      <br/>
      <Route path='/artists'>
        <Artists artists={artists} currentUser={props.currentUser}/>
       <Songs songs={songs}/>
      </Route>
    </div>
  )
}