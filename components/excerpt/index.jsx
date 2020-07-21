import useStyles from "./Articles.style";
import Layout from "../Layout";
import router from "../../misc/route";
import Excerpt from "./Excerpt";

function Index(props) {
  const {articles = [], nextPage, prePage, route = router.articles, poem} = props;
  const classes = useStyles();
  return (
    <Layout
      nextPage={nextPage}
      prePage={prePage}
      route={route}
      poem={poem}
    >
      <div className={classes.wrapper}>
        {
          articles.map((article, index) => (
            <Excerpt
              key={article.id}
              id={article.id}
              index={index}
              title={article.title}
              content={article.excerpt}
              url={article.illustration}
              time={article.time}
              commentsCount={article.commentsCount}
              tag={article.tag}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export default Index;