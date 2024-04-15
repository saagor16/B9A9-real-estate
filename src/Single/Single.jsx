import { useLoaderData, useParams } from "react-router-dom";

const Single = () => {
  const single = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = single.find((card) => card.id == idInt);

  return (
    <div className=" container mx-auto mt-10">
      <div className="text-center">
        <h2>View Details:{card.estate_title}</h2>
      </div>
      <div className="border rounded-xl">
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <figure className="px-10 pt-10">
                <img src={card.image} alt="Image" className="rounded-xl" />
              </figure>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 space-y-4">
                <h1 className="text-gray-900 text-4xl title-font font-bold mb-1">
                  {card.estate_title}
                </h1>
                <div className=" flex gap-8">
                  <h4>Segment :{card.segment_name}</h4>
                  <h4>Status:{card.status}</h4>
                </div>
                <div className=" flex gap-8">
                  <h4>Price :{card.price}</h4>
                  <h4>Area:{card.area}</h4>
                </div>
                <div className=" ">
                  <h4>Location:{card.location}</h4>
                </div>
                <div className="gap-5">
                  <p>facilities:{card.facilities[0]}</p>
                  <p className="pl-14">{card.facilities[1]}</p>
                  <p className="pl-14">{card.facilities[2]}</p>
                </div>

                <p className="leading-relaxed">Details : {card.description}</p>
              </div>
              <div className="flex gap-10 pt-5">
                <p>Open:{card.opening_hours}</p>
                <p>Rating:{card.rating}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Single;
