import { PlayArrow, Save, Pause } from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material';
import { appTheme } from '../theme';
import { styled } from '@mui/material/styles';
import React, { useContext, useEffect, useState } from 'react';
import { useMutation, useSubscription } from '@apollo/client';
import { GET_SONGS } from '../graphql/subscriptions';
import { SongContext } from '../App';
import { ADD_OR_REMOVE_FROM_QUEUE } from '../graphql/mutations';

function SongList() {
  const { data, loading, error } = useSubscription(GET_SONGS);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 50,
        }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div>Error fetching songs!</div>;
  }

  return (
    <div>
      {data.songs.map(song => (
        <Song key={song.id} song={song} />
      ))}
    </div>
  );
}

function Song({ song }) {
  const { state, dispatch } = useContext(SongContext);
  const [currentSongPlaying, setCurrentSongPlaying] = useState(false);
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE);
  const { title, artist, thumbnail, id } = song;

  useEffect(() => {
    const isSongPlaying = state.isPlaying && id === state.song.id;
    setCurrentSongPlaying(isSongPlaying);
  }, [id, state.isPlaying, state.song.id]);

  function handleTogglePlay() {
    dispatch({ type: 'SET_SONG', payload: { song } });
    dispatch(state.isPlaying ? { type: 'PAUSE_SONG' } : { type: 'PLAY_SONG' });
  }

  function handleAddOrRemoveFromQueue() {
    addOrRemoveFromQueue({
      variables: { input: { ...song, __typename: 'Song' } },
    });
  }

  return (
    <SongsContainer>
      <SongInfoContainer>
        <Thumbnail image={thumbnail} />
        <SongInfo>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body1' component='p' color='textSecondary'>
              {artist}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={handleTogglePlay} size='small' color='primary'>
              {currentSongPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton onClick={handleAddOrRemoveFromQueue}>
              <Save size='small' color='secondary' />
            </IconButton>
          </CardActions>
        </SongInfo>
      </SongInfoContainer>
    </SongsContainer>
  );
}

export default SongList;

// styled components

const SongsContainer = styled(Card)({
  margin: appTheme.spacing(3),
});

const SongInfoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const SongInfo = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
});

const Thumbnail = styled(CardMedia)({
  objectFit: 'cover',
  width: 140,
  height: 140,
});
