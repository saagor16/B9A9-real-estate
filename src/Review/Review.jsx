import { useEffect } from "react";
import PageTitle from "../PageTitle/PageTitle";
import Slider from "./Slider";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-auto container">
      <PageTitle title="Review"></PageTitle>
      <div data-aos="fade-up"
      data-aos-duration="3000">
        <Slider></Slider>
      </div>
      <div data-aos="fade-down"
      data-aos-duration="3000" className="mt-10 md:mt-64 lg:mt-10 text-center ">
        <h2 className="text-3xl font-extrabold">Review</h2>
        <div className="flex flex-col w-full p-8 shadow-sm rounded-xl lg:p-12 bg-gray-300 text-black mt-10">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-center">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">How was your experience?</span>
              <div className="flex space-x-3">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-[460px] mx-auto">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full mb-5 bg-gray-800 text-gray-100"
              />
              <textarea
                rows="3"
                placeholder="Review..."
                className="p-4 rounded-md resize-none text-gray-100 bg-gray-800 h-[200px]"
              ></textarea>
              <button
                type="button"
                className="py-4 my-8 font-semibold rounded-md text-gray-900 bg-violet-400 hover:text-yellow-600 hover:bg-slate-700"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center text-black">
            <a rel="noopener noreferrer" href="#" className="text-xl">
              Maybe later
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
