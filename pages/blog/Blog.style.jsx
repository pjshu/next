import {makeStyles} from "@material-ui/core";

export default makeStyles((theme) => ({
  divider: {
    backgroundColor: '#fff'
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: '100%'
  },
  avatar: {
    marginRight: '10px',
    height: 40,
    width: 40,
    '& img': {
      height: '100%',
      width: '100%',
      borderRadius: 20
    },
    [theme.breakpoints.only('xs')]: {
      display: 'none',
    },
  },
  blogWrapper: {
    display: "flex",
    marginTop: '40px',
    height: '150px',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      width: '95%',
    },
    [theme.breakpoints.only('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '900px',
      height: '150px',
    }
  },
  blogContent: ({dark}) => ({
    width: '100%',
    height: '120px',
    border: dark ? '1px solid #000' : '1px solid #fff',
    borderRadius: '5px',

    background: dark ? '#000' : '#fff',
    color: dark ? '#fff' : "000",
    '& > div:first-child': {
      height: '80px',
      padding: '15px',
      maxHeight: '150px',
      overflow: 'hidden',
    },
    '& .eventIcon': {
      padding: '10px',
      display: "flex",
      alignItems: 'center',
      color: dark ? '#fff' : '#000'
    },
    '& .time': {
      marginLeft: '10px'
    }
  })
}));
