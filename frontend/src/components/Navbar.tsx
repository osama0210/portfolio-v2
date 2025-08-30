import Logo from '../assets/Logo.svg';
import {useState} from "react";

const Navbar = () => {
    const [open, setopen] = useState(false);

  return (
      <header className="bg-primary w-full h-[90px] fixed ">
          <nav className="max-w-[1500px] mx-auto px-10 h-full flex items-center justify-between border-b border-white/20 shadow-2xl">
              <a href="#hero">
                  <img src={Logo} alt=""/>
              </a>

              <ul className="hidden md:flex gap-8 justify-center text-white font-light">
                  <li><a href="#about" className="hover:text-accent transition">About</a></li>
                  <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
                  <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>

              <a href="/cv.pdf" className="hidden md:inline-block hover:text-accent transition text-white font-medium">
                  Download CV
              </a>

              <button
                  onClick={() => setopen(o => !o)}
                  className="md:hidden text-white inline-flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/10 transition"
              >
                  {open ?
                      (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="">
                          <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
                      </svg>) :
                      (<svg className="w-6 h-6" viewBox="0 0 24 24" fill="">
                          <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2"/>
                      </svg>)
                  }

              </button>
          </nav>
          <div
              className={`md:hidden w-full h-full fixed top[90px] right-0 transform transition-transform bg-primary text-white  duration-300 ${
                  open ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
          </div>
    </header>
  );
};

export default Navbar;