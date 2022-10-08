import { useEffect, useState } from "react";
import { dataProgramming } from "../features/dataJson";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleProgrammingList = () => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    dataProgramming().then((res) => {
      setArticle(res);
    });
  }, []);

  return (
    <>
      <section id="home" className="pt-24 pb-32">
        <div className="container px-20">
          {!article && <IsPending />}
          {article && <ArticleTitle title="Programming" />}
          <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">{article && article.map((articleFetch, index) => <ArticleFulfilled articleFetch={articleFetch} index={index} category="Indonesia" key={index} />)}</div>
        </div>
      </section>
    </>
  );
};

export default ArticleProgrammingList;
