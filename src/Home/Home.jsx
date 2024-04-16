import { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import Banner from "./Banner";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";
import GiftCard from "./GiftCard";
import Every from "./Every";
import Photo from "./Photo";

const Home = () => {
  const [book, setBook] = useState([]);


  useEffect(() => {
    AOS.init();
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return (
    <div  className="mt-10 container mx-auto ">
      <PageTitle title="Home"></PageTitle>
      <div>
        <Banner></Banner>
      </div>
      <div className="container mx-auto mt-10 ">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" mt-10"
        >
        <div className="text-center">
        <h4 className="text-5xl font-extrabold text-lime-600">Welcome to Paradise: Our RealResort</h4>
          <p className="mt-10">In popular tourist destinations or peak seasons, rental prices are typically higher due to increased demand. <br /> On the other hand, off-peak seasons or less popular destinations may offer lower rental rates.</p>
        </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto p-3 container lg:ml-10">
        {book.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
        <div className="mt-10">
          <Every></Every>
        </div>
        <div className="mt-10">
          <GiftCard></GiftCard>
        </div>
        <div className="mt-10">
          <Photo></Photo>
        </div>
      </div>
    </div>
  );
};

export default Home;
