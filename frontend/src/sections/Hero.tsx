import ArrowRight from "../assets/arrow-right.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex md:justify-center items-center px-10 md:px-12 pt-17 md:pt-0 bg-[url('../assets/phone-calligraphy.svg')] bg-bottom-left lg:bg-[url('../assets/Calligraphy.svg')]  bg-no-repeat lg:bg-right-top "
    >
      <div className="flex flex-col gap-4 animate-fade-in max-w-screen-md">
        <h1 className="text-6xl md:text-8xl text-primary md:text-center tracking-wide leading-none mb-3">
          Hello, I’m <br /> Osama Alasmi.
        </h1>
        <p className="text-base md:text-center text-black md:text-xl font-normal z-[-1]">
          I’m a developer focused on structured growth. <br /> I believe in
          discipline, clarity, and building things that matter.
        </p>
        <div className="flex justify-end md:justify-center my-5">
          <button
            aria-label="Scroll to projects"
            className="bg-secondary inline-flex items-center gap-2 text-white text-base  md:text-lg px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:bg-secondary/90 transition"
          >
            See my work
            <img src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
