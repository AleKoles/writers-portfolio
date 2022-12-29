import React from "react";
import { BsArrowDown } from "react-icons/bs";
import background from "../assets/remington-landscape.jpg";

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
      <div className="max-w-full h-full bg-light bg-opacity-80">
        <div className="max-w-[1000px] mx-auto px-8  flex flex-col gap-8 justify-center h-full">
          <p className="text-xl ">Hello, my name is</p>
          <h2 className="text-5xl sm:text-7xl font-bold">Inna Zhelezovskaya</h2>
          <h2 className="text-4xl sm:text-5xl font-semibold">
            I am an experienced content writer and narrative designer.
          </h2>
          <div className="flex gap-8">
            <button className="text-dark border-dark group border-2 px-6 py-3 my-2 flex items-center uppercase hover:text-light hover:bg-dark hover:border-dark">
              Resume
              <span className="group-hover:translate-y-2 duration-300">
                <BsArrowDown className="ml-3" />
              </span>
            </button>
            <button className="text-dark border-dark group border-2 px-6 py-3 my-2 flex items-center uppercase hover:text-light hover:bg-dark hover:border-dark">
              Portfolio
              <span className="group-hover:translate-y-2 duration-300">
                <BsArrowDown className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
