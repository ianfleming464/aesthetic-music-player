import { createTheme } from '@mui/material/styles';
import { teal, purple } from '@mui/material/colors';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: teal,
    secondary: purple,
  },
});
