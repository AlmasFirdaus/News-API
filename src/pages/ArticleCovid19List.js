import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleCovid19 } from "../features/article/articleSlice";
// import ArticlePending from "../component/articlePending/ArticlePending";
import ArticleFulfilled from "../component/articleFulfilled/ArticleFulfilled";
// import ArticleTitle from "../component/articleTitle/ArticleTitle";

const ArticleCovid19List = () => {
  const covidState = useSelector((state) => state.article);
  const articleCovid19s = covidState.entitiesCovid19;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleCovid19());
  }, [dispatch]);

  return (
    <>
      <section id="home-article" className="pt-36 pb-32 ">
        <div className="container px-20">
          <h1 className="font-bold text-3xl text-center mb-20">News Covid-19</h1>
          <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {articleCovid19s.map((articleFetch, index) => (
              <ArticleFulfilled articleFetch={articleFetch} index={index} category="Covid-19" key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleCovid19List;
