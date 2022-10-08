import { useSelector } from "react-redux";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleSaved = () => {
  const newState = useSelector((state) => state.article);
  const articleSaveds = newState.entitiesSaved;

  console.log("Saved", articleSaveds);
  return (
    <div id="home">
      <section id="articleSaved" className="pt-24 pb-32 min-h-screen ">
        <div className="container px-20">
          {newState.isFetchPending && <IsPending />}
          {!newState.isFetchPending && <ArticleTitle title="saved" />}
          {newState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
              {articleSaveds.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="Saved" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ArticleSaved;
