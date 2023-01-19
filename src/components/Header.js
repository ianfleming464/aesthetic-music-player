import { HeadsetTwoTone } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

// theme help -- https://www.welcomedeveloper.com/react-mui-theme

function Header() {
  return (
    <AppBar sx={{ background: 'teal' }} position='fixed'>
      <Toolbar>
        <HeadsetTwoTone />
        <Typography sx={{ ml: 8 }} variant='h6' component='h1'>
          apollo-music-share
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
