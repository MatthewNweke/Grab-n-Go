import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const handleScroll = () => {
    const scrollThreshold = 50;
    setScrolled(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full  flex shadow-md fixed z-40 top-0  left-0 justify-around max-lg:block transition-all duration-300 ${
        isScrolled ? "bg-[transparent] bg-opacity-90" : "bg-[#ff0000]"
      }`}
    >
      <div className="flex justify-between items-center py-4  px-5 lg:px-10 xl:px-20">
        <Link to="/">
          {" "}
          <img
            src="/FxLogo.png"
            className="cursor-pointer"
            width={200}
            height={50}
            alt=""
          />{" "}
        </Link>

        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none bg-[#ffcc29] p-2"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`lg:hidden w-[50%] left-1/2 -translate-x-1/2 absolute transition-all duration-300 overflow-hidden max-md:w-[60%] max-sm:w-[70%] ${
          isMenuOpen ? "max-h-[60vh] py-10" : "max-h-0"
        } ${isScrolled ? "bg-[#ffcc29] bg-opacity-60" : "bg-[#ffcc29]"}`}
      >
        <div className="flex flex-col px-3 gap-4 ">
          <Link to="/">
            <p className=" p-3 hover:bg-[#dddddd] rounded-lg text-white text-sm cursor-pointer max-lg:text-[1rem]">
              Home
            </p>
          </Link>
          <div className="cursor-pointer">
            <Link to="/plan">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] hover:bg-[#dddddd]">
                Menu
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/about">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] hover:bg-[#dddddd]">
                About Us
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] hover:bg-[#dddddd]">
                Services
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] hover:bg-[#dddddd]">
                Contact
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/signin">
              <p className=" text-white bg-[#ff0000] inline-block p-3 rounded-lg text-sm max-lg:text-[1rem]">
                Sign in
              </p>
            </Link>
          </div>

         
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex items-center gap-16 hidden`}>
        <div>
          <Link to="/">
            <p className="font-semibold text-white text-sm cursor-pointer">
              Home
            </p>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link to="/plan">
            <p className="font-semibold text-white text-sm">Plan</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/about">
            <p className="font-semibold text-white text-sm">About</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/contact">
            <p className="font-semibold text-white text-sm">Contact</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/signin">
            <p className="font-semibold text-white text-sm max-lg:text-[1.2rem]">
              Sign in
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-2 cursor-pointer"></div>
        <div className="cursor-pointer">
          <select name="language" id="language" className="cursor-pointer">
            <option value="language">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
