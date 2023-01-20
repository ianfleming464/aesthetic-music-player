import { useState } from 'react';
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

function AddSong() {
  const [dialog, setDialog] = useState(false);

  function handleCloseDialog() {
    setDialog(false);
  }

  return (
    <MyContainerStyled>
      <Dialog sx={{ textAlign: 'center' }} open={dialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <AlbumThumbnail src='http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg' alt='Song thumbnail' />
          <TextField margin='dense' name='title' label='Title' fullWidth />
          <TextField margin='dense' name='artist' label='Artist' fullWidth />
          <TextField margin='dense' name='thumbnail' label='Thumbnail' fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant='outlined'>Add Song</Button>
        </DialogActions>
      </Dialog>
      <InputUrl
        placeholder='Add Youtube or Soundcloud Url'
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
        sx={{ margin: appTheme.spacing(1) }}
        onClick={() => setDialog(true)}
        variant='contained'
        endIcon={<AddBoxOutlined />}>
        Add
      </Button>
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
