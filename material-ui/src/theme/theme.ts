// theme.ts
import { createTheme, Theme as MuiTheme } from '@material-ui/core/styles';
const muiTheme: MuiTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#222232',
    },
  },
});
export const theme = {
  ...muiTheme,
  app: {
    blue: '#228be6',
    gray: '#495057',
    pink: '#f06595'
  },
};
export type Theme = typeof theme;