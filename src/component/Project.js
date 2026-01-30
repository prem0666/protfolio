import React from "react";

const Project = () => {
  return (
    <>
      <div className="relative">
        <img
          src="experience.avif"
          alt="exp"
          className="w-full absolute h-[2800px] z- -top-40 left-0 -z-10"
        />
        <div className="absolute w-full h-[2800px] bg-black/50 -top-40"></div>
        <div className="flex items-center mt-40 z-10 relative flex-col justify-center w-full">
          <div className="flex gap-5 justify-center w-full text-4xl mb-5  text-white font-extrabold ">
            <section className="text-gray-300">02</section>
            <h1>p o r t f o l i o</h1>
          </div>
          <div className="flex gap-5 justify-center w-full text-xl mb-5 text-white ">
            <h1>MY LATEST WORK.</h1>
            <section className="text-gray-300">SEE MORE </section>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative z-20 my-20 flex items-center ">
            <img src="download.avif" alt="projects" className="w-80 " />
            <div className="absolute w-full h-full  top-0 left-0 hover:bg-black/30  z-99 flex items-end justify-center text-white pb-3 sm:pb-10 text-lg uppercase font-bold">
              project 01
            </div>
          </div>
          <div className="relative z-20 ">
            <img src="download.jpg" alt="projects" className="w-80 " />
            <div className="absolute w-full h-full  top-0 left-0 hover:bg-black/30  z-99 flex items-end justify-center text-white pb-3 sm:pb-10 text-lg uppercase font-bold">
              projects 02
            </div>
          </div>
          <div className="relative z-20 ">
            <img src="download2.avif" alt="projects" className="w-80 " />
            <div className="absolute w-full h-full  top-0 left-0 hover:bg-black/30  z-99 flex items-end justify-center text-white pb-3 sm:pb-10 text-lg uppercase font-bold">
              projects 03
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Project;
