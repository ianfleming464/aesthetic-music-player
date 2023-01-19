import React from 'react';
import { InputAdornment, TextField, Button, Dialog } from '@mui/material';
import { AddBoxOutlined, Link } from '@mui/icons-material';

function AddSong() {
  return (
    <div>
      <TextField
        size='small'
        placeholder='Add YouTube or Soundcloud URL'
        fullWidth
        margin='normal'
        type='url'
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Link />
            </InputAdornment>
          ),
        }}
      />
      <Button variant='contained' color='primary' endIcon={<AddBoxOutlined />}>
        ADD
      </Button>
    </div>
  );
}

export default AddSong;
