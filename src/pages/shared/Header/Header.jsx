import React from "react";
import logo from "../../../assets/images/logo2.jpeg";
import { NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navItem = (
    <>
      <NavLink to="/" className="mx-2 font-bold px-4 py-2">
        <li>Home</li>
      </NavLink>
      <NavLink to="/shop" className="mx-2 font-bold px-4 py-2">
        <li>Shop</li>
      </NavLink>
      <NavLink to="/about" className="mx-2 font-bold px-4 py-2">
        <li>About Us</li>
      </NavLink>
      <NavLink to="/contact" className="mx-2 font-bold px-4 py-2">
        <li>Contact Us</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-300 w-96"
          >
            {navItem}
          </ul>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <img className="w-10 h-10" src={logo} alt="" />
          <h2 className="font-bold text-3xl">DGray</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <button>
          <FaSearch className="h-6 w-6 mx-2" />
        </button>
        <button>
          <FaShoppingCart className="h-6 w-6 mx-2" />
        </button>
        <button>
          <FaUser className="h-6 w-6 mx-2" />
        </button>
      </div>
    </div>
  );
};

export default Header;
