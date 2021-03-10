import { fade, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    width: 360,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  sectionDesktop: {
    display: 'flex',
    justifyContent: 'space-between',
    marginRight: '5vw',
    "& > button" : {
      marginRight: "1em"
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  dialogBox: {
    width: "15vw",
    height: "auto",
    textAlign: "center",
    margin: "1vh 0 1vh 0"
  }
}));

export const useInputStyles = makeStyles((theme) => ({
  root: {
    color: 'inherit',
  },
  input: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
