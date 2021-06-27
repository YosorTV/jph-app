import styled from "styled-components";
import { NavLink, Link as RouterLink } from 'react-router-dom'
import { Card, createMuiTheme } from "@material-ui/core";
import { Pagination as MuiPagination } from '@material-ui/lab';

export const DARK_THEME = createMuiTheme({
  palette: {
    primary:{
      main:"#242424",
    },
    type: 'dark',
  },
  overrides:{
    MuiCssBaseline: {
      '@global': {
        body: {
          background: 'linear-gradient(to left bottom, #232323, #2b2b2b, #333333, #3b3b3b, #444444)',
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiCheckbox:{
      root:{
        color:"#fff"
      },
      colorSecondary:{
        color:"#fff",
        '&$checked': {
          color: '#51ac43',
        },
      }
    },
    MuiFormControl:{
      root:{
        width:"100%",
      }
    },
    MuiTableContainer:{
      root:{
        borderRadius:0
      }
    },
    MuiTableCell:{
      root:{
        borderBottom:0,
      }
    },
    MuiSnackbarContent: {
      root:{
        display: "flex",
        justifyContent:"center",
        backgroundColor:"#cd3e3e",
        color: "#fff"
      }
    },
    MuiList:{
      padding:{
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  }
});

export const LIGHT_THEME = createMuiTheme({
  palette: {
    primary:{
      main:"#749aa6",
    },
    secondary:{
      main:"#dc2424"
    },
    type: 'light',
  },
  overrides:{
    MuiCssBaseline: {
      '@global': {
        body: {
          background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea);',
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiTableContainer:{
      root:{
        borderRadius:0
      }
    },
    MuiFormControl:{
      root:{
        width:"100%",
      }
    },
    MuiPaper:{
      root:{
        backgroundColor:"#749aa6",
        color:"#fff"
      }
    },
    MuiListItemIcon:{
      root:{
        color:"#fff"
      }
    },
    MuiCheckbox:{
      root:{
        color:"#fff"
      },
      colorSecondary:{
        color:"#fff",
        '&$checked': {
          color: '#6bde59',
        },
      }
    },
    MuiTableCell:{
      root:{
        borderBottom:0,
      },
      head:{
        color:"#fff"
      },
      body:{
        color:"#fff"
      },
    },
    MuiSnackbarContent: {
      root:{
        display: "flex",
        justifyContent:"center",
        backgroundColor:"#cd3e3e",
        color: "#fff"
      }
    },
    MuiIconButton:{
      root:{
        color:'#fff',
      }
    },
    MuiList:{
      padding:{
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  }
});

export const Nav = styled.nav`
  padding: 1rem 0.5rem;
  height: 75px;
  display: flex;
  align-items: center;
`;

export const Pagination = styled(MuiPagination)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Navlink = styled(NavLink)`
  text-decoration:none;
  color:#d1d1d1;
  font-size: 1rem;
  margin: 0.5rem 0.5rem;
  transition: .2s color linear;
  &:hover, &.active{
    color:#fff;
  }
`;

export const Link = styled(RouterLink)`
  text-decoration:none;
  color:#cfd26a;
  font-size: 1rem;
  transition: .2s color linear;
  &:hover, &.active{
    color:#fff;
  }
`;

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`
export const Main = styled.main`
height: calc(100vh - 75px);
`;

export const Section = styled.section`
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    h4 {
      margin-bottom: 2rem;
    }
    img {
      margin-top: .5rem;
    }
`;

export const LightImg = styled.img`
  filter: invert(1);
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    h4 {
      margin-top: 2rem;
      margin-bottom: 1rem;
  }
  nav{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const Post = styled(Card)`
  margin: 1rem 1rem 1rem 1rem;
  h5{
    margin-bottom: 1rem;
    height: 80px;
  }
  p{
    height: 100px;
  }
`
