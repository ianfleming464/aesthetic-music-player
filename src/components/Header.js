import { HeadsetTwoTone } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function Header() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <HeadsetTwoTone />
        <HeaderTitle variant='h6' component='h1'>
          apollo-music-share
        </HeaderTitle>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

const HeaderTitle = styled(Typography)({
  marginLeft: 8,
});
