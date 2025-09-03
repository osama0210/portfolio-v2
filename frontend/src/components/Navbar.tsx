import Logo from "../assets/Logo.svg";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.svg";
import { useState } from "react";

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <header className="bg-primary w-full h-[90px] fixed top-0 left-0 right-0 z-[9999]">
      <nav className="max-w-[1500px] mx-auto px-10 h-full flex items-center justify-between border-b border-white/20 shadow-2xl">
        <a href="#hero" onClick={() => setopen(false)}>
          <img src={Logo} alt="O logo" />
        </a>

        <ul className="hidden md:flex gap-8 justify-center text-white font-light">
          <li>
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-accent transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/cv.pdf"
          className="hidden md:inline-block hover:text-accent transition text-white font-medium"
        >
          Download CV
        </a>


        <button
          aria-label="Toggle menu"
          onClick={() => setopen((o) => !o)}
          className="md:hidden text-white inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10 transition"
        >
          {open ? (
            <img src={Close} alt="Hamburger toggle" />
          ) : (
            <img src={Hamburger} alt="Close toggle" />
          )}
        </button>
      </nav>
      <div
        className={`fixed md:hidden w-full inset-0 top-[90px] right-0 transform transition-transform bg-primary text-white  duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between p-10 text-2xl">
          <ul className="flex flex-col gap-5">
            <li>
              <a
                onClick={() => setopen(false)}
                href="#about"
                className="hover:text-accent transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setopen(false)}
                href="#projects"
                className="hover:text-accent transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => setopen(false)}
                href="#contact"
                className="hover:text-accent transition"
              >
                Contact
              </a>
            </li>
          </ul>

          <ul>
            <li className="border-t border-white/30 pt-6 mt-4">
              <a
                href="/cv.pdf"
                className="hover:text-accent transition text-white font-medium"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
