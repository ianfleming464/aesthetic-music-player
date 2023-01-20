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

function AddSong() {
  const [dialog, setDialog] = useState(false);

  function handleCloseDialog() {
    setDialog(false);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Dialog sx={{ textAlign: 'center' }} open={dialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            src='http://img.youtube.com/vi/--ZtUFsIgMk/0.jpg'
            alt='Song thumbnail'
            style={{ width: '90%' }}
          />
          <TextField margin='dense' name='title' label='Title' fullWidth />
          <TextField margin='dense' name='artist' label='Artist' fullWidth />
          <TextField margin='dense' name='thumbnail' label='Thumbnail' fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant='outlined'>Add Song</Button>
        </DialogActions>
      </Dialog>
      <TextField
        sx={{ margin: appTheme.spacing(1) }}
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
    </div>
  );
}

export default AddSong;
