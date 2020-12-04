import React, { useEffect, useState } from 'react'
import { getAllArtists } from '../services/artists'

export default function Artists(props) {
  const [myArtists, setMyArtists] = useState([])

  useEffect(() => {
    const fetchMyArtists = async () => {
      const myArtistData = await getAllArtists()
      setMyArtists(myArtistData)
    }
    if (props.currentUser) {
      fetchMyArtists()
    }
    }, [props.currentUser])
  
    return (
      <div>
        <h3>Artists</h3>
        {
          myArtists.map(artist => (
            <div>
              <h5>{artist.name}</h5>
              {/* <img src={artist.imgURL} key={artist.id}/> */}
        
            </div>
          ))
        }
      </div>
    )
  }