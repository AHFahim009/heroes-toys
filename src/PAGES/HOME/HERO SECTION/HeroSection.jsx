import { heroData } from "../../../UTILITIES/data";

const HeroSection = () => {
  return (
    <section className=" py-8 grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
      {/* text part */}
      <div className=" flex flex-col items-start justify-center gap-6">
        <p className="text-[2.5rem] lg:text-4xl px-4 lg:px-0 tracking-wide ">
          Unleash your imagination <br />
          <span className="text-5xl">&</span>
          <br />
          <span className="text-orange-600 text-[2.5rem] ">
            Craft your superhero <br /> toys
          </span>
        </p>

        <p className=" text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button type="button" className=" btn-orange">
          Order Now
        </button>
      </div>
      {/* images part */}
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src="https://raw.githubusercontent.com/Vetrivel-VP/foodapp-yt-mar22/master/src/img/heroBg.png"
          className=" ml-auto h-full w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="px-2 absolute lg:top-0 lg:bottom-0 flex items-center justify-center gap-2 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.image}
                  className="w-24 lg:w-40 rounded-3xl "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
