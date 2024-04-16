import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  return (
    <div className="mt-10">
      <div className="card w-96 h-full  shadow-xl space-y-5 bg-gray-200">
        <figure className="px-10 pt-10">
          <img
            src={card.image}
            alt="Image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body space-y-3 ">
          <h2 className="card-title text-purple-900">{card.estate_title}</h2>
          <p className="text-opacity-20">{card.description.slice(0, 50)}</p>
          <h4 className="font-bold">Price:<span className="text-purple-900">{card.price}</span></h4>
          <h4 className="font-bold">Area:<span className="text-purple-900">{card.area}</span></h4>
          <h4 className="font-bold">location:<span className="text-purple-900">{card.location}</span></h4>
          <Link to={`/single/${card.id}`} className="card-actions">
            <button className="btn btn-primary hover:btn-success">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
