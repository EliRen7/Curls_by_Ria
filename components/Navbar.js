import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import Modal from "./Modal";

 function NavBar() {
  return (
    <div className="navbar h-44 bg-navbar-background fixed w-full md:h-10 z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost h-28 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-28 md:h-5 md:w-5"
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
          </label>
          <ul
            className="menu menu-compact bg-korean-description dropdown-content mt-10 gap-9 p-32 rounded-3xl "
          >
            <li tabIndex={0} className="gap-6">
              <a className=" text-white text-7xl" href="#about">About Ria</a>
              <a className=" text-white text-7xl" href="#treatments">Services</a>
              <a className=" text-white text-7xl" href="#testimonials">Testimonials</a>
              <a className=" text-white text-7xl" href="#contact">Contact</a>
              <a className=" text-white text-7xl" href="#location">Location</a>
              <a href="https://www.youtube.com/@WavyCurlyRia" className=" text-white text-7xl">
                <AiFillYoutube />
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex pb-20">
        <ul className="menu menu-horizontal px-18 mt-20 text-white">
          <li tabIndex={0}>
            <a href="#about">About Ria</a>
            <a href="#treatments">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
            <a href="#location">Location</a>
            <a href="https://www.youtube.com/@WavyCurlyRia" target="_blank">
              <AiFillYoutube />
              YouTube
            </a>
          </li>
        </ul>
      </div>

      <Modal />

    </div>
  );
}

export default NavBar;
