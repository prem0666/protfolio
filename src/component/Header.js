import React, { useState } from "react";

const Header = () => {
  const Navbartext = ["home", "about", "projects", "contact"];
  const [visible, setVisible] = useState(false)



  return (
    <>
    
    <div className="bg-[#021b29] w-full text-white fixed  z-99 top-0 flex justify-between items-center h-20 p-5 md:px-40">
      {/* Logo */}
      <div className="flex items-center font-bold text-xl  relative -z-99 gap-4 text-[#c5c5b0]">
        <img
          className="h-15 w-15 rounded-4xl border-white border-r-2 border-t"
          src="logo.webp"
          alt="logo"
        />
        prem
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {Navbartext.map((item, index) => (
          <a
            key={index}
            href="/"
            className="relative inline-block
              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-white
              after:transition-all
              after:duration-300
              hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

    {/* Desktop Menu */}
      {/* <div className="hidden md:flex items-center gap-8">
        {Navbartext.map((item, index) => (
          <a key={index} href="/" className="relative inline-block
            after:content-['']
            after:absolute after:left-0 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-white
            after:transition-all after:duration-300
            hover:after:w-full">
            {item}
          </a>
        ))}
      </div> */}

      {/* Mobile Icon */}
      <div
        className="relative w-10 h-10 flex items-center justify-center md:hidden  z-[999]"
        onClick={() => setVisible(!visible)}
      >
        <div className="w-8 h-6 flex flex-col justify-between transition-all">
          <span className={`h-[2px] bg-white block transition-all duration-300 
            ${visible ? "rotate-45 translate-y-2" : ""}`}></span>

          <span className={`h-[2px] bg-white block transition-all duration-300 
            ${visible ? "opacity-0" : ""}`}></span>

          <span className={`h-[2px] bg-white block transition-all duration-300 
            ${visible ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <div className="w-full h-screen absolute flex flex-col justify-center items-center
          gap-10 text-4xl top-0 left-0 bg-black z-[500]">
          {Navbartext.map((item, index) => (
            <a key={index} href="/" className="relative inline-block
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-white
              after:transition-all after:duration-300 hover:after:w-full">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
    
    </>
  );
};

export default Header;
