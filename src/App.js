import AddSong from './components/AddSong';
import Header from './components/Header';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@mui/material';

function App() {
  const greaterThanSmall = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <>
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
    </>
  );
}

export default App;
