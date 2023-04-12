import React from "react";
import { AiFillYoutube } from "react-icons/ai";

import Modal from "./Modal";

 function NavBar() {
  return (
    <div className="navbar bg-rose-100 fixed w-full h-10 z-[100]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>About</a>
            </li>
            <li tabIndex={0}>
              <a>
                Services
                {/* <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg> */}
              </a>
              {/* <ul className="p-2 bg-base-100">
                <li>
                  <a>Treatments</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
              </ul>
            </li>
            <li> */}

            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
                <a>Contact</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@WavyCurlyRia" target="_blank">
                <AiFillYoutube />
                YouTube
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex pb-20">
        <ul className="menu menu-horizontal px-16 mt-20 text-black">
          <li>
            <a>About Ria</a>
          </li>
          <li tabIndex={0}>
            <a>
              Services
              {/* <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg> */}
            </a>
            {/* <ul className="p-2 bg-base-100 text-black z-10">
              <li>
                <a>Treatments</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
            </ul>
          </li>
          <li> */}
            <a>Testimonials</a>
            <a>Contact</a>
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