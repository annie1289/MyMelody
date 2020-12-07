import React from 'react'
import './Charts.css'

export default function Charts(props) {
props.allArtists.sort((a, b) => (a.name > b.name) ? 1 : -1)

  for (let i = 0; i < props.allArtists.length; i++){
    
    let totalCount = props.allArtists.filter(artist => artist.name === props.allArtists[i].name).length
    props.allArtists[i].count = totalCount;

}
  props.allArtists.sort((a, b) => (b.count - a.count))
  let unique = []
  props.allArtists.forEach(element => {
    if (!unique.includes(element.name)) {
      unique.push(element.name)
    }
  })
  return (
    <div className = "topArtists">
      <h3 className="chartz">Top Artists</h3> <br />
      <ol>
      {
          unique.map(artist => (
          
            <li key={artist.id}>{artist}</li>
        ))
        }   
     </ol>

      </div>
  )
}