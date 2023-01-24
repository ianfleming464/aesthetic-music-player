import { PlayArrow, SkipPrevious, SkipNext } from '@mui/icons-material';
import { Card, CardContent, CardMedia, IconButton, Slider, Typography } from '@mui/material';
import React from 'react';
import { appTheme } from '../theme';
import QueuedSongList from './QueuedSongList';
import { styled } from '@mui/material/styles';

function SongPlayer() {
  return (
    <>
      <PlayerContainer variant='outlined'>
        <PlayerDetails>
          <PlayerContent>
            <Typography variant='h5' component='h3'>
              Title
            </Typography>
            <Typography variant='subtitle1' component='p' color='textSecondary'>
              Artist
            </Typography>
          </PlayerContent>
          <PlayerControls>
            <IconButton>
              <SkipPrevious />
            </IconButton>
            <IconButton>
              <PlayerPlayIcon />
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
        <PlayerThumbnail image='http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg' />
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
