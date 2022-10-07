import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleProgramming } from "../features/article/articleSlice";
// import ArticlePending from "../component/articlePending/ArticlePending";
import ArticleFulfilled from "../component/articleFulfilled/ArticleFulfilled";
// import ArticleTitle from "../component/articleTitle/ArticleTitle";

const ArticleProgrammingList = () => {
  const programmingState = useSelector((state) => state.article);
  const articleProgrammings = programmingState.entitiesProgramming;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleProgramming());
  }, [dispatch]);

  return (
    <>
      <section id="home-article" className="pt-36 pb-32 ">
        <div className="container px-20">
          <h1 className="font-bold text-3xl text-center mb-20">News Programming</h1>
          <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {articleProgrammings.map((articleFetch, index) => (
              <ArticleFulfilled articleFetch={articleFetch} index={index} category="programming" key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleProgrammingList;
