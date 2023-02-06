import { PlayArrow, SkipPrevious, SkipNext, Pause } from '@mui/icons-material';
import { Card, CardContent, CardMedia, IconButton, Slider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { appTheme } from '../theme';
import QueuedSongList from './QueuedSongList';
import { styled } from '@mui/material/styles';
import { SongContext } from '../App';

function SongPlayer() {
  const { state, dispatch } = useContext(SongContext);

  function handleTogglePlay() {
    dispatch(state.isPlaying ? { type: 'PAUSE_SONG' } : { type: 'PLAY_SONG' });
  }

  return (
    <>
      <PlayerContainer variant='outlined'>
        <PlayerDetails>
          <PlayerContent>
            <Typography variant='h5' component='h3'>
              {state.song.title}
            </Typography>
            <Typography variant='subtitle1' component='p' color='textSecondary'>
              {state.song.artist}
            </Typography>
          </PlayerContent>
          <PlayerControls>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton onClick={handleTogglePlay}>
              {state.isPlaying ? <PlayerPauseIcon /> : <PlayerPlayIcon />}
            </IconButton>
            <IconButton>
              <SkipNext />
            </IconButton>

            <Typography variant='subtitle1' component='p' color='textSecondary'>
              00:01:30
            </Typography>
          </PlayerControls>

          <Slider type='range' min={0} max={1} step={0.01} />
        </PlayerDetails>
        <PlayerThumbnail image={state.song.thumbnail} />
      </PlayerContainer>
      <QueuedSongList />
    </>
  );
}

export default SongPlayer;

// styled components

const PlayerContainer = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
});

const PlayerDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 15px',
});

const PlayerContent = styled(CardContent)({
  flex: '1 0 auto',
});

const PlayerThumbnail = styled(CardMedia)({
  width: 150,
});

const PlayerControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  paddingLeft: appTheme.spacing(1),
  paddingRight: appTheme.spacing(1),
});

const PlayerPlayIcon = styled(PlayArrow)({
  height: 38,
  width: 38,
});

const PlayerPauseIcon = styled(Pause)({
  height: 38,
  width: 38,
});
