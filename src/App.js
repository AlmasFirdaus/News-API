import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./component/navbar/MyNavbar";
import Home from "./pages/Home";
import ArticleIndonesiaList from "./pages/ArticleIndonesiaList";
import ArticleProgrammingList from "./pages/ArticleIProgrammingList ";
import ArticleCovid19List from "./pages/ArticleCovid19List";
import ArticleSearchList from "./pages/ArticleSearchList";
import ArticleSaved from "./pages/ArticleSaved";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ArticleIndonesiaList />} />
          <Route path="indonesia" element={<ArticleIndonesiaList />} />
          <Route path="programming" element={<ArticleProgrammingList />} />
          <Route path="covid-19" element={<ArticleCovid19List />} />
          <Route path="search" element={<ArticleSearchList />} />
          <Route path="saved" element={<ArticleSaved />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
