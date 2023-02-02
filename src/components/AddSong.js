import { useState, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Link, AddBoxOutlined } from '@mui/icons-material';
import { appTheme } from '../theme';
import { styled } from '@mui/material/styles';
import ReactPlayer from 'react-player';
import SoundCloudPlayer from 'react-player/soundcloud';
import YouTubePlayer from 'react-player/youtube';

function AddSong() {
  const [url, setUrl] = useState('');
  const [dialog, setDialog] = useState(false);
  const [playable, setPlayable] = useState(false);
  const [song, setSong] = useState({
    duration: 0,
    title: '',
    artist: '',
    thumbnail: '',
  });

  useEffect(() => {
    const isPlayable = SoundCloudPlayer.canPlay(url) || YouTubePlayer.canPlay(url);
    setPlayable(isPlayable);
  }, [url]);

  function handleChangeSong(event) {
    const { name, value } = event.target;
    setSong(prevSong => ({ ...prevSong, [name]: value }));
  }

  function handleCloseDialog() {
    setDialog(false);
  }

  async function handleEditSong({ player }) {
    const nestedPlayer = player.player.player;
    let songData;
    if (nestedPlayer.getVideoData) {
      songData = getYoutubeInfo(nestedPlayer);
    } else if (nestedPlayer.getCurrentSound) {
      songData = await getSoundcloudInfo(nestedPlayer);
    }
    setSong({ ...songData, url });
  }

  function getYoutubeInfo(player) {
    const duration = player.getDuration();
    const { title, video_id, author } = player.getVideoData();
    const thumbnail = `http://img.youtube.com/vi/${video_id}/0.jpg`;
    return {
      duration,
      title,
      artist: author,
      thumbnail,
    };
  }

  function getSoundcloudInfo(player) {
    return new Promise(resolve => {
      player.getCurrentSound(songData => {
        if (songData) {
          resolve({
            duration: Number(songData.duration / 1000),
            title: songData.title,
            artist: songData.user.username,
            thumbnail: songData.artwork_url.replace('-large', '-t500x500'),
          });
        }
      });
    });
  }
  const { thumbnail, title, artist } = song;

  return (
    <MyContainerStyled>
      <Dialog sx={{ textAlign: 'center' }} open={dialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <AlbumThumbnail src={thumbnail} alt='Song thumbnail' />
          <TextField
            value={title}
            margin='dense'
            name='title'
            label='Title'
            onChange={handleChangeSong}
            fullWidth
          />
          <TextField
            value={artist}
            margin='dense'
            name='artist'
            label='Artist'
            onChange={handleChangeSong}
            fullWidth
          />
          <TextField
            value={thumbnail}
            margin='dense'
            name='thumbnail'
            label='Thumbnail'
            onChange={handleChangeSong}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant='outlined'>Add Song</Button>
        </DialogActions>
      </Dialog>
      <InputUrl
        placeholder='Add Youtube or Soundcloud Url'
        onChange={event => setUrl(event.target.value)}
        value={url}
        fullWidth
        margin='normal'
        type='url'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={!playable}
        sx={{ margin: appTheme.spacing(1) }}
        onClick={() => setDialog(true)}
        variant='contained'
        endIcon={<AddBoxOutlined />}>
        Add
      </Button>
      <ReactPlayer url={url} hidden onReady={handleEditSong} />
    </MyContainerStyled>
  );
}

export default AddSong;

// styled components

const MyContainerStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const InputUrl = styled(TextField)({
  margin: appTheme.spacing(1),
});

const AlbumThumbnail = styled('img')({
  width: '90%',
});
