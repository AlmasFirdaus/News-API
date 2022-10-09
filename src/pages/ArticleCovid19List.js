import { useEffect, useState } from "react";
import { dataCovid } from "../features/dataJson";
import ArticleFulfilled from "../component/ArticleFulfilled";
import ArticleTitle from "../component/ArticleTitle";
import IsPending from "../component/IsPending";

const ArticleCovid19List = () => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    dataCovid().then((res) => {
      setArticle(res);
    });
  }, []);

  return (
    <section id="home">
      <section id="articleCovid" className="pt-24 pb-32">
        <div className="container px-8 md:px-20">
          {!article && <IsPending />}
          {article && <ArticleTitle title="Covid-19" />}
          <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">{article && article.map((articleFetch, index) => <ArticleFulfilled articleFetch={articleFetch} index={index} category="Indonesia" key={index} />)}</div>
        </div>
      </section>
    </section>
  );
};

export default ArticleCovid19List;
