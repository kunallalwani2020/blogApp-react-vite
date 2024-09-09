import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // State to manage menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility when either button is clicked
  const handleClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-black font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-5 w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-slate-50 font-semibold text-3xl lg:hover:text-orange-500">
            Blog
          </span>
          <span className="text-orange-500 font-semibold text-3xl lg:hover:text-slate-50">
            Website
          </span>
        </Link>

        {/* Collapsible Menu */}
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:!block max-lg:w-full max-lg:fixed max-lg:bg-slate-950 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-slate-50 p-3"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <ul className="lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <a href="#">
                {/* <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                /> */}
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <Link
                to="/"
                className="lg:hover:text-orange-500 text-orange-500 block font-semibold text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#"
                className="lg:hover:text-orange-500 text-slate-50 block font-semibold text-[15px]"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#"
                className="lg:hover:text-orange-500 text-slate-50 block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#"
                className="lg:hover:text-orange-500 text-slate-50 block font-semibold text-[15px]"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#"
                className="lg:hover:text-orange-500 text-slate-50 block font-semibold text-[15px]"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Menu Open Button */}
        <button
          id="toggleOpen"
          className="lg:hidden ml-auto bg-slate-50"
          onClick={handleClick}
        >
          <svg
            className="w-7 h-7"
            fill="#000"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="flex lg:ml-auto max-lg:w-full">
          <div className="flex xl:w-79 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-orange-500 focus-within:bg-transparent ">
            <input
              type="text"
              placeholder="Search something... "
              className="w-full text-sm bg-transparent rounded outline-none pr-2  text-slate-50  "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16px"
              className="cursor-pointer fill-gray-400"
            >
              <path d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
            </svg>
          </div>
          <button className="px-4 py-2 mx-1 text-sm rounded-full font-bold text-slate-100 border-2 border-orange-500 bg-orange-500 transition-all ease-in-out duration-300 hover:bg-black  hover:text-slate-50">
            <Link to="/create-blog"> Create Blog</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
