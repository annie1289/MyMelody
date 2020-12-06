
const allArtists = 
[
  {
    "id": 1,
    "name": "FKA Twigs"
  },
  {
    "id": 2,
    "name": "Taylor Swift"
  },
  {
    "id": 3,
    "name": "Jorja Smith"
  },
  {
    "id": 4,
    "name": "Conan Grey"
  },
  {
    "id": 5,
    "name": "Lizzo"
  },
  {
    "id": 6,
    "name": "Frank Ocean"
  },
  {
    "id": 7,
    "name": "Rina Sawayama"
  },
  {
    "id": 8,
    "name": "Bon Iver"
  },
  {
    "id": 9,
    "name": "Lorde"
  },
  {
    "id": 10,
    "name": "Billie Eilish"
  },
  {
    "id": 11,
    "name": "Coldplay"
  },
  {
    "id": 12,
    "name": "Rihanna"
  },
  {
    "id": 13,
    "name": "Beyonce"
  },
  {
    "id": 14,
    "name": "Kendrick Lamar"
  },
  {
    "id": 15,
    "name": "Phoebe Bridgers"
  },
  {
    "id": 16,
    "name": "Taylor Swift"
  },
  {
    "id": 17,
    "name": "Taylor Swift"
  },
  {
    "id": 18,
    "name": "Coldplay"
  },
  {
    "id": 19,
    "name": "Taylor Swift"
  },
  {
    "id": 20,
    "name": "Coldplay"
  }
  ]

allArtists.sort((a, b) => (a.name > b.name) ? 1 : -1)

for (let i = 0; i < allArtists.length; i++){
  let totalCount = allArtists.filter(artist => artist.name === allArtists[i].name).length
  allArtists[i].count = totalCount;
  if (totalCount > 1) {
    allArtists.splice(i+1,(totalCount))
  }
  }
  allArtists.sort((a, b) => (b.count > a.count) ? 1 : -1)

  console.log(allArtists)


 