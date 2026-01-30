import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#021b29] text-[#c5c5b0] px-6 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between">

        {/* LEFT */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-bold text-white">Prem Tahalani</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Frontend developer focused on building fast, responsive and usable
            interfaces with clean code and real-world logic.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer"><a href="/">Home</a></li>
          <li className="hover:text-white cursor-pointer"><a href="/projects">Projects</a></li>
          <li className="hover:text-white cursor-pointer"><a href="/about">About</a></li>
          <li className="hover:text-white cursor-pointer"><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/prem0666" target="_blank"
              rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-[#c5c5b0]">
        © {new Date().getFullYear()} Prem Tahalani. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
