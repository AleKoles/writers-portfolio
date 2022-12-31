import React from "react";

import background from "../assets/remington-landscape2.jpg";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-fit lg:h-screen bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="max-w-full h-full flex justify-center bg-light bg-opacity-80">
        <div className="max-w-[1080px] py-4 px-8 md:px-20 flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h4 className="text-4xl font-bold inline border-b-4 border-primary">
              Work
            </h4>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
            <div
              className="shadow-2xl text-dark "
              style={{
                backgroundImage: `url(${background})`,
              }}
            >
              <div className="p-4 flex flex-col bg-light bg-opacity-75">
                <div>
                  <h5 className="text-2xl font-semibold">
                    Top Facts You Need to Know about 5G
                  </h5>
                  <p className="text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit...
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="text-dark border-dark group border-2 text-lg px-4 py-2 my-2 flex items-center hover:text-light hover:bg-dark hover:border-dark">
                    Read
                  </button>
                  <button className="text-dark border-dark group border-2 text-lg px-4 py-2 my-2 flex items-center hover:text-light hover:bg-dark hover:border-dark">
                    See published
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
