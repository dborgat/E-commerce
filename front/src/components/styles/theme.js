import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e8e7e5',
      main: '#424242', // gris
      dark: '#e3e2df', // naranjita oscuro
      // contrastText: '#fff',
    },
    secondary: {
      light: '#61892f',
      //main: '#f4976C', //naranjita
      //main: '#64ffda', //verdecito
      main: '#20b2aa',
      dark: '#aa694b',
      // contrastText: '#000',
    },
    background: {
      paper: '#e3e2df',
    },

  },
});

//#f4976C //naranjita gama: #aa694b #f4976C #f6ab89
//#1f2833 //gris VS gama: #151c23 #1f2833 #4b535b
//#4b535b //gris claro gama : #343a3f #4b535b #6f757b
//#e3e2df //background gris gama: #9e9e9c #e3e2df #e8e7e5
//#61892f //verde gama:  #5d8723 #86c232 #9ece5b
//#86c232 //verde manzana
//#65ccb8 // celestito gama: #468e80 #65ccb8 #83d6c6