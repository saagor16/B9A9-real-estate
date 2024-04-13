const Card = () => {
  return (
    <div>
     <div className=" mt-10">
        <h4 className="text-5xl font-extrabold text-center">card</h4>
     </div>
     <div>
     <div className="card w-96 bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Card;
