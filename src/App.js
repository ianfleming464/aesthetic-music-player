import React, { useContext, useReducer } from 'react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@mui/material';
import songReducer from './reducer';

export const SongContext = React.createContext({
  song: {
    artist: 'Echosoft',
    duration: 169,
    id: 'ed2ce166-9ab1-43f6-af93-f34485bfd42a',
    thumbnail: 'http://img.youtube.com/vi/TPC-80rwbYU/0.jpg',
    title: 'Shoulders',
    url: 'https://www.youtube.com/watch?v=TPC-80rwbYU',
  },
  isPlaying: false,
});

function App() {
  const initialSongState = useContext(SongContext);
  const [state, dispatch] = useReducer(songReducer, initialSongState);
  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <SongContext.Provider value={{ state, dispatch }}>
      <Hidden only='xs'>
        <Header />
      </Hidden>
      <Grid container spacing={3}>
        <Grid
          style={{
            paddingTop: greaterThanSmall ? 80 : 10,
          }}
          item
          xs={12}
          md={7}>
          <AddSong />
          <SongList />
        </Grid>
        <Grid
          style={
            greaterThanMedium
              ? {
                  position: 'fixed',
                  width: '100%',
                  right: 20,
                  top: 70,
                }
              : {
                  position: 'fixed',
                  width: '100%',
                  right: 20,
                  left: 0,
                  bottom: 0,
                }
          }
          item
          xs={12}
          md={5}>
          <SongPlayer />
        </Grid>
      </Grid>
    </SongContext.Provider>
  );
}

export default App;

// using Reducers and Context to deal with state:
// import useContext, useReducer
// create a context with default state outside of App component, export it (eg. here, SongContext)
//  call useContext in App with created context (SongContext), in a variable called (for example) initialBlahblahState
// call useReducer with empty arrow function (1st arg), initialBlahBlahState (2nd arg); return and destructure array with [state, dispatch]
// wrap everything in provider, with a value prop containing an object with state, dispatch
// write reducer.js (e.g. here songReducer.js). Reducer function accepting state, action; switch cases depending on action type
// import reducer into app, plug reducer function into first argument of useReducer hook
// in reducer, create a default type which simply returns the prevous state , e.g. function songReducer(state, action) {
// switch (action.type) {
//   default:
//     return state;
// }
// }
