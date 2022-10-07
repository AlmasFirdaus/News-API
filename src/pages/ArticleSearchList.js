import { useSelector } from "react-redux";
// import ArticlePending from "../component/articlePending/ArticlePending";
import ArticleFulfilled from "../component/articleFulfilled/ArticleFulfilled";
// import ArticleTitle from "../component/articleTitle/ArticleTitle";

const ArticleSearchList = () => {
  const searchState = useSelector((state) => state.article);
  const articleSearchs = searchState.entitiesSearch;

  return (
    <>
      <section id="article-search" className="pt-36 pb-32">
        <div className="container px-20">
          <h1 className="font-bold text-3xl text-center mb-20">News Search</h1>
          <div className="grid justify-center md:grid-cols-4 md:gap-5">
            {articleSearchs.map((articleFetch, index) => (
              <ArticleFulfilled articleFetch={articleFetch} index={index} category="Search" key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleSearchList;
