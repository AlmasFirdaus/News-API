// import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchArticleSearch } from "../../features/article/articleSlice";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";

const MyNavbar = () => {
  const location = useLocation().pathname;
  const hamburger = document.querySelector("#hamburger");
  const navMenu = document.querySelector("#nav-menu");
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchArticleSearch({ searchInput }));
    navigate("/search");
  };

  useEffect(() => {
    console.log(location);
    // Navbar Fixed
    window.onscroll = function () {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;
      // const toTop = document.querySelector("#to-top");

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
        // toTop.classList.remove("hidden");
        // toTop.classList.add("flex");
      } else {
        header.classList.remove("navbar-fixed");
        // toTop.classList.remove("flex");
        // toTop.classList.add("hidden");
      }
    };

    if (hamburger) {
      window.addEventListener("click", function (e) {
        if (e.target !== hamburger && e.target !== navMenu) {
          hamburger.classList.remove("hamburger-active");
          navMenu.classList.add("hidden");
        }
      });
    }
  });

  const hamburgerCLick = () => {
    const hamburger = document.querySelector("#hamburger");
    const navMenu = document.querySelector("#nav-menu");
    // Hamburger
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
      <div className="container px-20">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            {location === "/" ? (
              <a href="#home" className="font-bold text-lg text-primary block py-6">
                News API
              </a>
            ) : (
              <a href="/" className="font-bold text-lg text-primary block py-6">
                News API
              </a>
            )}
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" onClick={hamburgerCLick} className="block absolute right-4 lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300"></span>
              <span className="hamburger-line transition duration-300"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300"></span>
            </button>

            <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <div className="block lg:flex lg:items-center">
                <ul className="block lg:flex">
                  <li className="group">
                    <Link to="/indonesia" className="text-base  text-dark py-2 mx-6 flex group-hover:text-primary">
                      Indonesia
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="/programming" className="text-base  text-dark py-2 mx-6 flex group-hover:text-primary">
                      Programming
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="/covid-19" className="text-base  text-dark py-2 mx-6 flex group-hover:text-primary">
                      Covid-19
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="/saved" className="text-base  text-dark py-2 mx-6 flex group-hover:text-primary">
                      Saved
                    </Link>
                  </li>
                </ul>
                <form onSubmit={handleSubmit} className="mx-6 flex">
                  <input type="text" onChange={searchChange} className="text-base border border-primary md:border-none rounded-lg mr-3 px-2 w-1/2" />
                  <button className="py-1 px-3 w-1/2 md:w-1/3 bg-primary rounded-lg text-secondary transition duration-200 hover:opacity-80">Search</button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
