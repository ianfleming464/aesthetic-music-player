import { PlayArrow, Save } from '@mui/icons-material';
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
import React from 'react';

function SongList() {
  let loading = false;

  const song = {
    title: 'LÜNE',
    artist: 'MÖÖN',
    thumbnail: 'http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg',
  };

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

  return (
    <div>
      {Array.from({ length: 10 }, () => song).map((song, i) => (
        <Song key={i} song={song} />
      ))}
    </div>
  );
}

function Song({ song }) {
  const { title, artist, thumbnail } = song;
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
            <IconButton size='small' color='primary'>
              <PlayArrow />
            </IconButton>
            <IconButton>
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
