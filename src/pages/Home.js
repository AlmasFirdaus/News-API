import React from "react";
import ArticleIndonesiaList from "./ArticleIndonesiaList";

const Home = () => {
  return (
    <>
      <section id="home">
        <div
          className="w-full h-screen bg-cover pt-36 px-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582079768266-e65af1ad8d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}
        >
          <div className="container h-1/2">
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-slate-200 text-2xl lg:text-3xl">Newspaper From News API Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, rerum.</h1>
              <p className="font-medium text-slate-300 text-md pt-5 lg:text-lg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis voluptas iure, minus officia molestias magnam ratione omnis! Iure officiis similique ipsam nesciunt expedita dicta iste necessitatibus vitae tempore deserunt!
                Perferendis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ArticleIndonesiaList />
    </>
  );
};

export default Home;
