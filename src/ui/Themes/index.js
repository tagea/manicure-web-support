import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 16,
    fontFamily: [
      '"Roboto"',
      'sans-serif'
    ].join(',')
  },
  spacing: {
    unit: '0.2'
  },
  palette: {
    primary: {
      main: 'rgb(47, 128, 237)'
    },
    secondary: {
      main: 'rgb(255, 222, 107)',
      dark: 'rgb(234, 189, 32)'
    },
    surface: {
      main: 'rgb(255,255,255)',
      light: 'rgb(245, 245, 245)',
      transparent: 'rgba(0,0,0,0.08)'
    },
    text: {
      light: 'rgb(255,255,255)',
      main: 'rgb(0,0,0)',
      transparent: 'rgba(0,0,0,0.6)',
      error: 'rgb(217, 0, 0)'
    },
    shadow: {
      transparent: 'rgba(119, 119, 119, 0.15)',
      main: 'rgba(119, 119, 119, 0.5)'
    },
    border: {
      light: 'rgba(10,10,10,0.15)',
      main: 'rgb(47, 128, 237)',
      error: 'rgb(217, 0, 0)',
      success: 'rgb(39, 202, 25)',
      transparent: 'rgba(0,0,0,0)'
    }
  }
});
