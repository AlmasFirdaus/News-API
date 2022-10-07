import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleIndonesia } from "../features/article/articleSlice";
// import ArticlePending from "../component/articlePending/ArticlePending";
import ArticleFulfilled from "../component/articleFulfilled/ArticleFulfilled";
// import ArticleTitle from "../component/articleTitle/ArticleTitle";

const ArticleIndonesiaList = () => {
  const indonesiaState = useSelector((state) => state.article);
  const articleIndonesias = indonesiaState.entitiesIndonesia;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticleIndonesia());
  }, [dispatch]);

  return (
    <>
      <section id="home-article" className="pt-36 pb-32">
        <div className="container px-20">
          <h1 className="font-bold text-3xl text-center mb-20">News Indonesia</h1>
          <div className="grid justify-center md:grid-cols-2 md:gap-5 xl:grid-cols-4">
            {articleIndonesias.map((articleFetch, index) => (
              <ArticleFulfilled articleFetch={articleFetch} index={index} category="Indonesia" key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleIndonesiaList;
