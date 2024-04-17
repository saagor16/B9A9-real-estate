import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Slider = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-extrabold  text-3xl lg:text-5xl text-center my-10">
        Our Resort{" "}
        
      </h1>

      <div className="h-[300px] lg:h-[500px] w-full lg:w-[720px] ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NZ5W6oKNcawCLp94bzS7zQAzFLWLaQfriNT7jyuk9e65aMYqJ6Ky4tmzSoDLY2xAb5g&usqp=CAU"
              alt=""
              className="w-full md:h-[520px] h-[240px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2wAzFwY4wWyalV6kyitTE36GjVp5nfE7gX9O5_0Abg31gysevc6F6kcf2JWVu8nLIcEE&usqp=CAU"
              alt=""
              className="w-full md:h-[520px] h-[240px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLs5_1gxETCMQYell32IICFdZQqE8sts9t2G4O69y-0Q&s"
              alt=""
              className="w-full md:h-[520px] h-[240px]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://www.shutterstock.com/image-photo/hotel-front-desk-focus-on-260nw-311529155.jpg"
              alt=""
              className="w-full md:h-[520px] h-[240px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
