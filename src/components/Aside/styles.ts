import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: 360,
    backgroundColor: theme.palette.background.paper,
    display: 'block',
    
  },

  activeLink: {
    color: "red",
    textDecoration: "none",
    background: "grey"
  },

  itemLink: {
    textDecoration: "none",
    color: "black"
  },

  linksList: {
    overflow: "scroll",
    height: "91vh",
    '@media (minWidth: 900px)' :{
      width: "100vw"
    }
  }
}));
