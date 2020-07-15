import React from "react";
import Nav from './Nav';
import Footer from "./Footer";
import Poem from "./Poem";
import Paging from './Paging';
import ScrollToTop from "./ScrollToTop";
import {makeStyles} from "@material-ui/core";

// TODO: 添加Head
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row-reverse',
    }
  },
  contentAndPoem: {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
  },
  wrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    position: 'relative'
  },
}));

// 包含导航栏与页脚的容器
function Layout(props) {
  const {children, route, poem, setContentsOpen, contentsOpen, nextPage} = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav setContentsOpen={setContentsOpen} contentsOpen={contentsOpen}/>
      <div className={classes.contentAndPoem}>
        {
          route && poem && (
            <Poem route={route.name} poem={poem}/>
          )
        }
        <div className={classes.wrapper}>
          {children}

          {
            nextPage && (
              <Paging route={route} nextPage={nextPage}/>
            )
          }
          <ScrollToTop/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Layout;