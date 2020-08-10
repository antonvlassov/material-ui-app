import React from 'react';
import logo from './logo.svg';
//import './App.css';

// material UI
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

// app comp
import SideMenu from './components/SideMenu';
import Header from './components/Header';
import PageHeader from './components/PageHeader';


// theme customization - trocar algumas definições 
// do default theme em https://material-ui.com/customization/default-theme/
// 1. define as alterações em relação ao default theme
// 2. utiliza o componente Theme Provider para customizar 
const customTheme = createMuiTheme ({
  palette: {
    primary: {
      main: "#333996", //"#ff0000"
      light: "#3c44b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526"
    },
    background : {
      default: "#f4f5fd"
    },
    shape : {
      borderRadius: "12px"
    }

  },

  // theme overrides - permite redefinir as propriedades de todos os componentes do tipo especificado
  // dentro da aplicação
  overrides : {
      MuiAppBar :{ // nome do componente, a partir da doc oficial
        root : {
          transform: 'translateZ(0)' // <== adiciona shadow (sombra ao App Bar)
        }

      }

  },
   
  // default properties overrides
  // sobrescreve comportamento padrao do componente especificado, overriding properties da doc
  props: {
    MuiIconButton : {
      disbaleRipple: true
    }

  }

});

const useStyles = makeStyles( theme => ({

  appMain : {
      paddingLeft: "320px",
      width: "100%",
  }
  
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline/>
        <SideMenu  /> 
        <div className={classes.appMain}>
          <Header/>
          <PageHeader
            icon={<PeopleOutlineTwoToneIcon fontsize="large"/>}
            title="page header title"
            subtitle="page description"
          />
        </div>
      </ThemeProvider>  
    </>
  );
}

export default App;
