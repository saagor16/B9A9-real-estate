import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  return (
    <div className="mt-10 ">
      <div className="card w-96 h-full bg-base-100 shadow-xl space-y-5">
        <figure className="px-10 pt-10">
          <img
            src={card.image}
            alt="Image"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body space-y-3 ">
          <h2 className="card-title">{card.estate_title}</h2>
          <p>{card.description.slice(0, 50)}</p>
          <h4>Price:{card.price}</h4>
          <h4>Area:{card.area}</h4>
          <h4>Location:{card.location}</h4>
          <Link to={`/single/${card.id}`} className="card-actions">
            <button className="btn btn-primary">View Property</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
