import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  tagsWrapper: {
    marginTop: 100,
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10)
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(20),
      paddingRight: theme.spacing(20)
    },

  },
  tagWrapper: ({url}) => ({
    [theme.breakpoints.up('lg')]: {},
    '& > div': {
      background: `url(${url}) no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: "relative",
      height: 300,
      [theme.breakpoints.only('sm')]: {
        height: 220,
      },
    }
  }),
  tagName: {
    position: 'absolute',
    left: '5px',
    top: '5px',

    width: '80px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: '5px',
    background: '#fff',
    opacity: '0.8',
    boxShadow: '0 14px 38px rgba(0,0,0,.08), 0 3px 8px rgba(0,0,0,.06)'
  },
  tagDesc: {
    position: 'absolute',
    left: '10px',
    bottom: '10px',
    maxWidth: '90%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  pagingButton: {
    marginTop: '40px'
  }
}));