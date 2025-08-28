import Logo from '../assets/Logo.svg';

const Navbar = () => {
  return (
      <header className="bg-primary w-full h-[90px] fixed">
          <nav className="max-w-[1500px] mx-auto px-10 h-full flex items-center justify-between">
              <a href="#hero">
                  <img src={Logo} alt=""/>
              </a>

              <ul className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2 text-white font-light">
                  <li><a href="#about" className="hover:text-accent transition">About</a></li>
                  <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
                  <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>

              <a href="" className="hover:text-accent transition text-white font-medium">
                  Download CV
              </a>
          </nav>
    </header>
  );
};

export default Navbar;