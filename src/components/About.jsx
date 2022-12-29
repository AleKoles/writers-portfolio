import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit lg:h-screen py-4 flex justify-center px-8 md:px-20"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1080px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h4 className="text-4xl font-bold inline border-b-4 border-primary">
              About
            </h4>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1080px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl md:text-4xl font-bold">
            <p>Hi. I'm Inna, nice to meet you. Welcome to my narrative.</p>
          </div>
          <div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
