import { HeadsetTwoTone } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';

function Header() {
  return (
    <AppBar position='fixed'>
      <Toolbar sx={{ justifyContent: 'flex-start' }}>
        <HeadsetTwoTone />
        <HeaderTitle variant='h6' component='h1'>
          a e s t h e t i c - m u s i c - s h a r e
        </HeaderTitle>
        <Button
          variant='contained'
          href='https://ianflemingdeveloper.com/'
          target='_blank'
          endIcon={<ComputerTwoToneIcon />}
          sx={{ marginLeft: 'auto' }}>
          D e v e l o p e r - i n f o
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

const HeaderTitle = styled(Typography)({
  marginLeft: 20,
});
