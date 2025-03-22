import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const { getTotalCartItems } = useContext(ShopContext);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !document.getElementById("nav-menu").contains(e.target) &&
        !document.getElementById("hamburger").contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, []);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      document.getElementById("navbar").style.top =
        currentScrollY > prevScrollY ? "-80px" : "0";
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300"
    >
      <div className="flex justify-between items-center p-4 md:px-12 md:py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="VogueVista Logo" className="h-12 md:h-14" />
          <p className="text-[#171717] text-[24px] md:text-[32px] font-semibold">
            VogueVista
          </p>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          id="hamburger"
          className="md:hidden text-3xl text-[#171717]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Menu */}
        <div
          id="nav-menu"
          className={`absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none flex flex-col md:flex-row items-center gap-5 md:gap-10 text-[#626262] text-lg md:text-xl font-medium transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <ul className="flex flex-col md:flex-row items-center w-full md:w-auto">
            {["shop", "mens", "womens", "kids"].map((menuItem) => (
              <li
                key={menuItem}
                className="relative flex flex-col items-center justify-center cursor-pointer p-3 md:p-0 w-full md:w-auto text-center hover:text-red-500 transition"
                onClick={() => {
                  setMenu(menuItem);
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  to={`/${menuItem === "shop" ? "" : menuItem}`}
                  className="px-4 py-2"
                >
                  {menuItem.charAt(0).toUpperCase() + menuItem.slice(1)}
                </Link>
                {menu === menuItem && (
                  <span className="absolute bottom-0 w-4/5 h-[3px] rounded-[10px] bg-[#FF4141] mt-[5px]" />
                )}
              </li>
            ))}
          </ul>

          {/* Login & Cart Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto border-t md:border-none pt-4 md:pt-0">
            <Link to="/login" className="w-full md:w-auto">
              <button className="w-full md:w-[130px] h-[45px] border border-[#7a7a7a] text-[#515151] rounded-full text-sm md:text-base font-semibold bg-white hover:bg-gray-100 transition">
                Login
              </button>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart" className="relative flex justify-center items-center">
              <img src={cart_icon} alt="Cart Icon" className="w-10 h-10 md:w-12 md:h-12" />
              <div className="absolute -top-[8px] -right-[10px] flex justify-center items-center w-6 h-6 rounded-full bg-red-500 text-white text-sm font-semibold">
                {getTotalCartItems()}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
