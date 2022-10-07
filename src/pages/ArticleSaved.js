import { useSelector } from "react-redux";
// import ArticlePending from "../component/articlePending/ArticlePending";
import ArticleFulfilled from "../component/articleFulfilled/ArticleFulfilled";
// import ArticleTitle from "../component/articleTitle/ArticleTitle";

const ArticleSaved = () => {
  const newState = useSelector((state) => state.article);
  const articleSaveds = newState.entitiesSaved;

  console.log("Saved", articleSaveds);
  return (
    <>
      <section id="saved" className="pt-36 pb-32 ">
        <div className="container px-20">
          <h1 className="font-bold text-3xl text-center mb-20">News Saved</h1>
          <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {articleSaveds.map((articleFetch, index) => (
              <ArticleFulfilled articleFetch={articleFetch} index={index} category="Saved" key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleSaved;
