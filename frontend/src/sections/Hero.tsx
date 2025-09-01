const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex md:justify-center items-center px-10"
    >
      <div className="flex flex-col gap-3 w-fit">
        <h1 className="text-5xl md:text-7xl text-primary md:text-center">
          Hello, <br /> I’m Osama.
        </h1>
        <p className="md:text-center text-black">
          I’m a developer focused on structured growth. <br/> I believe in discipline,
          clarity, and building things that matter.
        </p>
      </div>
    </section>
  );
};

export default Hero;
