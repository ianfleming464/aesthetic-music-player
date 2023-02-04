import { HeadsetTwoTone } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

function Header() {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <HeadsetTwoTone />
        <HeaderTitle variant='h6' component='h1'>
          a e s t h e t i c - m u s i c - s h a r e
        </HeaderTitle>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

const HeaderTitle = styled(Typography)({
  marginLeft: 20,
});
