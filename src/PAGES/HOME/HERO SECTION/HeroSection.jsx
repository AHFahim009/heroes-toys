import { heroData } from "../../../UTILITIES/data";

const HeroSection = () => {
  return (
    <section className=" mt-8 grid grid-cols-1 md:grid-cols-2 gap-2 px-2">
      {/* text part */}
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className=" flex flex-col items-start justify-center gap-6"
      >
        <p className="text-[2.5rem] lg:text-4xl px-4 lg:px-0 tracking-wide uppercase ">
          Unleash your imagination <br />
          <span className="text-5xl">&</span>
          <br />
          <span className="text-orange-600 text-[2.5rem]  ">
            Craft your superhero <br /> toys
          </span>
        </p>

        <p className=" px-4 lg:px-0 text-center md:text-left md:w-[80%]">
          Are you ready to embark on an extraordinary adventure into the world
          of superheroes? At Amazing Heroes, we are passionate about everything
          related to superheroes and their incredible abilities. From the iconic
          characters to their awe-inspiring stories, we celebrate the power,
          bravery, and heroism they represent!
        </p>

        <button type="button" className=" btn-orange">
          Order Now
        </button>
      </div>

      {/* images part */}
      <div
        className="py-2 flex-1 flex items-center relative"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <img
          src="https://raw.githubusercontent.com/Vetrivel-VP/foodapp-yt-mar22/master/src/img/heroBg.png"
          className=" ml-auto  h-full w-full lg:w-auto lg:h-[500px]"
          alt="hero-bg"
        />

        <div className=" absolute lg:top-0 lg:bottom-0 flex items-center justify-center gap-2 flex-wrap">
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
                <p className="text-base lg:text-xl uppercase tracking-wider text-textColor mt-2 lg:mt-4">
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
