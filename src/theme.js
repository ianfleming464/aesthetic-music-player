import { teal, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const appTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});
