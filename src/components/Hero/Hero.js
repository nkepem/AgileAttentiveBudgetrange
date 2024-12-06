


const Hero = () => {
  return (
    <div className="container">
      <div
        className="hero h-96 overflow-hidden rounded-box md:h-[500px]"
        style={{ backgroundImage: 'url("https://placeimg.com/1000/800/tech")' }}
      >
        <div className="hero-overlay bg-secondary bg-opacity-60"></div>
        <div className="hero-content text-center text-secondary-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl font-bold sm:mb-7 sm:text-5xl">
              Lets make your product a success
            </h1>
            <p className="mb-5 sm:mb-7 sm:text-lg">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </p>
            <button className="btn btn-warning sm:btn-wide">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
