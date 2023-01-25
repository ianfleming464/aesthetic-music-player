import React from 'react';
import { Avatar, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

function QueuedSongList() {
  const song = {
    title: 'LÜNE',
    artist: 'MÖÖN',
    thumbnail: 'http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg',
  };

  return (
    <div style={{ margin: '10px 0' }}>
      <Typography color='textSecondary' variant='button'>
        QUEUE (5)
      </Typography>
      {Array.from({ length: 5 }, () => song).map((song, i) => (
        <QueuedSong key={i} song={song} />
      ))}
    </div>
  );
}

function QueuedSong({ song }) {
  const { thumbnail, artist, title } = song;
  return (
    <div>
      <Avatar src={thumbnail} alt='Song thumbnail' />
      <div>
        <Typography variant='subtitle2'>{title}</Typography>
        <Typography color='textSecondary' variant='body2'>
          {artist}
        </Typography>
      </div>
      <IconButton>
        <Delete color='error' />
      </IconButton>
    </div>
  );
}

export default QueuedSongList;

// styled components
