import React from 'react'
import './Charts.css'

export default function Charts(props) {

// props.allArtists.sort((a, b) => (a.name > b.name) ? 1 : -1)
// console.log(props.allArtists)

// for (let i = 0; i < props.allArtists.length; i++){
//   let totalCount = props.allArtists.filter(artist => artist.name === props.allArtists[i].name).length
//   props.allArtists[i].count = totalCount;
//   if (totalCount > 1) {
//     props.allArtists.splice(i,(totalCount-1))
//   }

// }
//   props.allArtists.sort((a, b) => (b.count < a.count))
  // props.allArtists.reverse();
  return (
    <div className = "topArtists">
      <h3 className="chartz">Top Artists</h3> <br />
      <ol>
      {
          props.allArtists.map(artist => (
          
            <li key={artist.id}>{artist.name}</li>
        ))
        }   
     </ol>

      </div>
  )
}