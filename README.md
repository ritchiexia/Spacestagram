# [Spacestagram](https://spctgrm.netlify.app/) 🔭
## Overview
Utilizes NASA's [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) Open API to display pictures and descriptions from previous and current posts.
Choose between displaying the 10 most recent Pictures of the Day with their titles, dates, copyrights, and descriptions; or 10 random posts.


## Developing
Install necessary packages via:
```
npm i @shopify/polaris
npm i axios
npm i react-router-dom
npm i @mui/material @emotion/react @emotion/styled
npm i @mui/icons-material
```
Set up a `.env` file in the root folder and add a [NASA API Key](https://api.nasa.gov/):
```
REACT_APP_API_KEY=api_key_value
```
Start up the React app locally:
```
npm start
```

## TODO:
- add functionality to load more posts upon reaching the bottom of the page
- add "Liked" page using localStorage
- ~~refine 'Like' button functionality/add animation for the heart~~
- ~~add a navigation bar that allows users to choose most recent, random posts~~
- add functionality without mouse
- add animations
- add fancier design
- ~~add tooltip when hovering or clicking on share link and like button~~
- add background transition to have space-related emojis or clip art show up from bottom **probably use parallax effects with perspective and translate-z**
- ~~add loading animation~~
