import { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";
import Banner from "./Banner";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    AOS.init();
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <div  className="mt-10 container mx-auto ">
        <Banner></Banner>
      </div>
      <div className="container mx-auto mt-10 ">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" mt-10"
        >
          <h4 className="text-5xl font-extrabold text-center">card</h4>
        </div>
        <div data-aos="fade-down" className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mx-auto">
        {book.map((card) => (
            <Card key={card.id} card={card}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
