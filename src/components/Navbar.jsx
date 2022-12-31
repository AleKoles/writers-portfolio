import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaBars,
  FaTimes,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="z-20 fixed w-full h-20 flex justify-between items-center px-4 md:px-8 lg:px-20 bg-primary text-light">
      <div className="flex justify-between items-center gap-4">
        <FaQuoteLeft />
        <h1 className="text-2xl font-semibold">Inna Zhelezovskaya</h1>
      </div>
      <div>
        <ul className="hidden md:flex gap-6 text-lg uppercase">
          <li className="hover:scale-110 duration-150 ease-in-out">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:scale-110 duration-150 ease-in-out">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="hover:scale-110 duration-150 ease-in-out">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="hover:scale-110 duration-150 ease-in-out">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-3xl uppercase">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl uppercase">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl uppercase">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl uppercase">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[60px] flex justify-between items-center -ml-24 hover:ml-0 duration-300 bg-primary">
            <a
              className="flex justify-between px-4 items-center w-full text-light"
              href="www.linkedin.com/in/inna-reshetnyak-b2a538102"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[150px] h-[60px] flex justify-between items-center -ml-24 hover:ml-0 duration-300 bg-[#857B71]">
            <a
              className="flex justify-between px-4 items-center w-full text-light"
              href="mailto:inna.zhelezovskaya@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[150px] h-[60px] flex justify-between items-center -ml-24 hover:ml-0 duration-300 bg-[#9c9084]">
            <a
              className="flex justify-between px-4 items-center w-full text-light"
              href="https://t.me/InnaRre"
              rel="noreferrer"
              target="_blank"
            >
              Telegram <FaTelegramPlane size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
