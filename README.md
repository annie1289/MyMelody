# PROJECT 4 README

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**My Melody** is an app that allows users to track their favorite songs and artists. They can edit, update, and delete these entries and then view the most popular artists among all users across the platform. 

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

 * Create User
 * Authentification
 * View, Create, Edit, and Delete Song Posts
 * View, Create, Edit, and Delete Artist Posts

<br>

### Goals

*Create a full-stack, full-CRUD app with really nice, sleek styling

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | JavaScript library|
|   React Router   | A tool that allows you to handle routes in a web app, using dynamic routing|
| React Material UI | React UI framework that will help in the creation of a navigation bar and various buttons |
|     CORS      | allow for requests from outside domains|
|     Rails      | back-end framework |

<br>

### Client (Front End)

#### Wireframes

Wireframes on Figma

https://www.figma.com/file/Rkt1PALvbv5V0gKQVreX2i/My-Melody-Wireframes?node-id=0%3A1


#### Color Scheme from http://colormind.io/:

![Color Palette Used](colors.png)


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 


#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ client
      |__App.jsx
      |__Index.jsx
      |__src/
            |__components/
                  |__Header.jsx
                  |__Footer.jsx    
                  |__Artists.jsx
                  |__MySongs.jsx
            |__containers/
                  |__MainContainer.jsx
            |__screens/
                  |__Login.jsx
                  |__Registration.jsx
                  |__MainLanding.jsx
                  |__CreateSong.jsx
                  |__EditSong.jsx
                  |__AddArtist.jsx
                  |__EditArtist.jsx
                  |__Favorites.jsx
                  |__Charts.jsx
                  
|__ services/
      |__apiConfig.js
      |__auth.js
      |__users.js
      |__songs.js
      |__artists.js

```

#### Component Tree

> Use this section to include a link to your component tree.

[Component tree](https://whimsical.com/mymelody-Fqths5vJBtAMVQxMXjciG1)

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Setup Back end      |    H     |     5 hrs      |          |  5      |
| Authentification    |    H     |     5 hrs      |          |    5    |
| Full CRUD           |    H     |     10 hrs      |          |     20   |
|  Header and Footer  |    H     |     3 hrs      |          |     3   |
|   Main Landing Page |    H     |     3 hrs      |          |   1     |
|  Create Pages       |    H     |     7 hrs      |          |   5     |
|Registration Screen  |    H     |     3 hrs      |          |   1     |
|      Favorites Page |    H     |     5 hrs      |          |      10  |
|     CSS Styling     |    H     |     3 hrs      |          |    3    |
|      Fix Bugs       |    L     |     3 hrs      |          |  2      |

| TOTAL               |          |     47 hrs      |           |    60 hrs    |


<br>

### Server (Back End)

#### ERD Model

![ERD My Melody](MyMelodyERD.png)

<br>

***

## Post-MVP

> 
* Edit and Delete User
* View top artists across the platform regardless of user 
* Choose a drop-down to view rankings of most popular songs and albums as well
* View other users profiles
* Animations

***

## Code Showcase


```
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
  ```
I strung along a lot of js functions we've been using throughout the bootcamp for purposes of algorithms to complete the charts function for my final project. It was cool to use that functionality and those skills we had learned to solve this problem and break it down into parts, even though I think it could definitely be refactored to be more efficient. 

## Code Issues & Resolutions

> Error: Request failed with status code 401
> Faced errors related to authenification and a nil json web token

