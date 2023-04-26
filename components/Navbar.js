import React from "react";
import { AiFillYoutube } from "react-icons/ai";

import Modal from "./Modal";

 function NavBar() {
  return (
    <div className="navbar h-44 bg-rose-100 fixed w-full md:h-10 z-[100]">
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
            className="menu menu-compact dropdown-content mt-3 mr-5 p-32 w-screen h-60"
          >
            <li>
              <a className="text-6xl" href="#about">About</a>
            </li>
            <li>
              <a className="text-6xl" href="#treatments">
                Services
              </a>
            </li>
            <li>
              <a className="text-6xl">Testimonials</a>
            </li>
            <li>
                <a className="text-6xl" href="#contact">Contact</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@WavyCurlyRia" target="_blank" className="text-6xl mr-40 invisible">
                <AiFillYoutube />
                YouTube
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex pb-20">
        <ul className="menu menu-horizontal px-18 mt-20 text-black">
          <li>
            <a href="#about">About Ria</a>
          </li>
          <li tabIndex={0}>
            <a href="#treatments">
              Services
            </a>
        
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </li>
          <li>
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