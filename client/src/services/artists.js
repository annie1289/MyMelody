import api from './apiConfig';

export const getAllArtists = async () => {
  const resp = await api.get(`/artists`);
  return resp.data;
};


export const getOneArtist = async (id) => {
  const resp = await api.get(`/artists/${id}`);
  return resp.data;
}

export const postArtist = async (artistData) => {
  const resp = await api.post('/artists', { artist: artistData });
  console.log(resp.data)
  return resp.data;
}


export const putArtist = async (id, artistData) => {
  const resp = await api.put(`/artists/${id}`, {artist: artistData});
  return resp.data;
}

export const destroyArtist = async (id) => {
  const resp = await api.delete(`/artists/${id}`);
  return resp;
}

// export const addArtist = async (id) => {
//   const resp = await api.put(`/artists/${id}`)
// }
//add user in somehow 
// /user 
// /user/id
// /user/id/artists
// /user/id/artists/artist_id
// /user/id/artists/artist_id/songs
// /user/id/artists/artist_id/songs/song_id
