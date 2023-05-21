const OurFeatures = () => {
  return (
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
      <h1 className="text-center text-3xl">Our Services</h1>
      <div className=" mx-auto grid  lg:grid-cols-2 py-8 justify-center  items-center ">
        <img src="https://st2.depositphotos.com/2059749/7420/i/450/depositphotos_74203737-stock-photo-3d-man-with-our-services.jpg" />
        <div className="px-4 lg:px-12 space-y-4 ">
          <div className="font-medium text-2xl">
            We Provide Many Services You Can Use
          </div>
          <div className="text-sm font-normal">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          <ul className="space-y-2 list-disc px-6   lg:px-2">
            <li>
              We pride ourselves on offering a vast selection of authentic
              superhero toys from popular franchises and characters
            </li>
            <li>
              Our team consists of passionate and knowledgeable experts who are
              well-versed in the world of superheroes and toys
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
