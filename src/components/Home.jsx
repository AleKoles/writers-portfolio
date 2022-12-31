import React from "react";
import { BsDownload, BsArrowRightSquare } from "react-icons/bs";
import background from "../assets/remington-landscape.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="bg-cover h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Container */}
      <div className="max-w-full h-screen bg-light bg-opacity-80">
        <div className="max-w-[1080px] mx-auto py-4 px-8 md:px-20 flex flex-col gap-8 justify-center h-full">
          <h2 className="text-5xl sm:text-7xl font-bold">Inna Zhelezovskaya</h2>
          <h3 className="text-3xl sm:text-5xl font-semibold leaning-relaxed">
            An experienced content writer and narrative designer.
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            <button className="text-dark border-dark  group border-2 text-xl px-6 py-3 my-2 flex items-center justify-center uppercase hover:text-light hover:bg-dark hover:border-dark">
              Resume
              <span className="group-hover:translate-y-2 duration-300">
                <BsDownload className="ml-3 text-2xl" />
              </span>
            </button>
            <button className="text-dark border-dark text-center group border-2  text-xl px-6 py-3 my-2 flex items-center justify-center uppercase hover:text-light hover:bg-dark hover:border-dark">
              Portfolio
              <span className="group-hover:translate-y-2 duration-300">
                <BsDownload className="ml-3 text-2xl" />
              </span>
            </button>
          </div>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="group flex flex-wrap items-center"
          >
            <div className="flex flex-wrap gap-4">
              <p className="text-2xl hidden sm:inline-flex">
                Let me tell you a bit more about what I do
              </p>
              <p className="text-2xl  sm:hidden">Find out more</p>
              <BsArrowRightSquare className="text-3xl group-hover:rotate-90 origin-center duration-300" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
