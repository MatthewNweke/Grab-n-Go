import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/index.css'

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollThreshold = 50;
    setScrolled(window.scrollY > scrollThreshold);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".menu") &&
      !event.target.closest(".hamburger-button")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`w-full flex shadow-md fixed z-40 top-0 left-0 justify-around max-lg:block transition-all duration-300 ${
        isScrolled ? "bg-[transparent] bg-opacity-90" : "bg-[#ff0000]"
      }`}
    >
      <div className="flex justify-between items-center py-2 px-5 lg:px-10 xl:px-20">
        <Link to="/">
          <img
            src="/logo.svg"
            className="cursor-pointer h-[4.5rem] w-[4.5rem]"
            
            alt="Logo"
          />
        </Link>

        {/* Responsive Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-button text-white focus:outline-none bg-[#ffcc29] p-2 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
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
        className={`menu lg:hidden w-[50%] left-1/2 -translate-x-1/2 absolute transition-all duration-300 overflow-hidden max-md:w-[60%] max-sm:w-[70%] ${
          isMenuOpen ? "max-h-[60vh] py-10" : "max-h-0"
        } ${isScrolled ? "bg-[#ffcc29] bg-opacity-60" : "bg-[#ffcc29]"}`}
      >
        <div className="flex flex-col px-3 gap-4">
          <Link to="/">
            <p className="p-3 font-semibold rounded-lg text-white text-sm cursor-pointer max-lg:text-[1rem]">
              Home
            </p>
          </Link>
          <div className="cursor-pointer">
            <Link to="/plan">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] font-semibold">
                Menu
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/about">
              <p className="p-3  rounded-lg text-white text-sm max-lg:text-[1rem] font-semibold">
                About Us
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] font-semibold">
                Services
              </p>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link to="/contact">
              <p className="p-3 rounded-lg text-white text-sm max-lg:text-[1rem] font-semibold">
                Contact
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className={`lg:flex items-center gap-16 hidden`}>
        <div>
          <Link to="/">
            <p className="font-semibold  text-white  cursor-pointer">
              Home
            </p>
          </Link>
        </div>

        <div className="cursor-pointer">
          <Link to="/plan">
            <p className="font-semibold text-white ">Plan</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/about">
            <p className="font-semibold text-white ">About</p>
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link to="/contact">
            <p className="font-semibold text-white ">Contact</p>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Header;
