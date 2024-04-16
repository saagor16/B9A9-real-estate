const About = () => {
  return (
    <div className="container mx-auto">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <figure>
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="Image"
                className="rounded-xl"
              />
            </figure>
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our RealResort</span>
            </h2>
            <p className="text-gray-700">
              Welcome to Our RealResort, an exquisite haven where luxury meets
              nature in perfect harmony. Nestled along the sun-kissed shores of
              an idyllic island, Our RealResort invites you to indulge in
              unparalleled comfort, adventure, and relaxation. Upon arrival,
               be greeted by our warm and attentive staff, who are
              dedicated to ensuring your every need is met with a smile. Step
              into our elegantly designed lobby, where contemporary aesthetics
              blend seamlessly with the natural beauty of the surroundings. As
              you check-in, be mesmerized by panoramic views of the
              sparkling ocean stretching out before you. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
