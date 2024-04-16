const First = () => {
  return (
    <div className="container mx-auto">
      <section className="dark:bg-gray-100 rounded-xl dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
          Your Guide to Our RealResort: Accommodations, Amenities, and Dining Options
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600">
          Welcome to Our RealResort, where luxury meets paradise. Nestled amidst breathtaking natural beauty, Our RealResort offers a sanctuary of indulgence and relaxation. Immerse yourself in the opulent comfort of our spacious suites and private villas
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              What types of accommodations do you offer?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Our RealResort offers a variety of luxurious accommodations, including spacious suites and private villas. Each option is elegantly appointed and designed to provide the utmost comfort and relaxation during your stay.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              What amenities are included with my stay?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Your stay at Our RealResort includes access to a range of premium amenities, such as a state-of-the-art fitness center, rejuvenating spa facilities, sparkling swimming pools, and complimentary Wi-Fi throughout the resort.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Are there dining options available on-site?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Yes, Our RealResort boasts a selection of exquisite dining options to suit every palate. Indulge in culinary delights at our signature restaurants, which offer a diverse array of gourmet cuisine crafted by talented chefs using the freshest ingredients sourced locally and globally{" "}
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default First;
