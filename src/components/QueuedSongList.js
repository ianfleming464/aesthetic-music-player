import React from 'react';
import { Avatar, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { ADD_OR_REMOVE_FROM_QUEUE } from '../graphql/mutations';

function QueuedSongList({ queue }) {
  console.log({ queue });
  const greaterThanMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

  // const song = {
  //   title: 'LÜNE',
  //   artist: 'MÖÖN',
  //   thumbnail: 'http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg',
  // };

  return (
    greaterThanMedium && (
      <div style={{ margin: '10px 0' }}>
        <Typography color='textSecondary' variant='button'>
          QUEUE ({queue.length})
        </Typography>
        {queue.map((song, i) => (
          <QueuedSong key={i} song={song} />
        ))}
      </div>
    )
  );
}

function QueuedSong({ song }) {
  const [addOrRemoveFromQueue] = useMutation(ADD_OR_REMOVE_FROM_QUEUE, {
    onCompleted: data => {
      localStorage.setItem('queue', JSON.stringify(data.addOrRemoveFromQueue));
    },
  });
  const { thumbnail, artist, title } = song;

  function handleAddOrRemoveFromQueue() {
    addOrRemoveFromQueue({
      variables: { input: { ...song, __typename: 'Song' } },
    });
  }
  return (
    <QueueContainer>
      <QueueAvatar src={thumbnail} alt='Song thumbnail' />
      <SongInfoContainer>
        <QueueText variant='subtitle2'>{title}</QueueText>
        <QueueText color='textSecondary' variant='body2'>
          {artist}
        </QueueText>
      </SongInfoContainer>
      <IconButton onClick={handleAddOrRemoveFromQueue}>
        <Delete color='error' />
      </IconButton>
    </QueueContainer>
  );
}

export default QueuedSongList;

// styled components

const QueueAvatar = styled(Avatar)({
  width: 44,
  height: 44,
});

const QueueText = styled(Typography)({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

const QueueContainer = styled('div')({
  display: 'grid',
  gridAutoFlow: 'column',
  gridTemplateColumns: '50px auto 50px',
  gridGap: 12,
  alignItems: 'center',
  marginTop: 10,
});

const SongInfoContainer = styled('div')({
  overflow: 'hidden',
  whitespace: 'nowrap',
});
