import { useLoaderData, useParams } from "react-router-dom";

const Single = () => {
  const single = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = single.find((card) => card.id == idInt);

  return (
    <div className=" container mx-auto mt-10 p-5">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold ">
          View Details:
          <span className="text-2xl font-extrabold text-orange-500">
            {card.estate_title}
          </span>
        </h2>
      </div>

      <section className="bg-gray-200 text-gray-100 space-y-3 lg:h-[720px] w-full rounded-xl">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between space-y-8">
          <div className="flex items-center justify-center lg:pt-32 lg:pl-16  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={card.image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-[720px] xl:h-112 2xl:h-128 rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-5 lg:pr-24 lg:pl-16  rounded-sm  lg:text-left text-black">
            <h1 className="text-purple-900 text-4xl title-font font-bold mb-1">
              {card.estate_title}
            </h1>
            <div className=" flex gap-8">
              <h4 className="font-bold">
                Segment :
                <span className="text-purple-900">{card.segment_name}</span>
              </h4>
              <h4 className="font-bold">
                Status:<span className="text-purple-900">{card.status}</span>
              </h4>
            </div>
            <div className=" flex gap-8">
              <h4 className="font-bold">
                Price:<span className="text-purple-900">{card.price}</span>
              </h4>
              <h4 className="font-bold">
                Area:<span className="text-purple-900">{card.area}</span>
              </h4>
            </div>
            <div className=" ">
              <h4 className="font-bold">
                location:
                <span className="text-purple-900">{card.location}</span>
              </h4>
            </div>
            <div className="gap-5 font-semibold">
              <p>facilities:{card.facilities[0]}</p>
              <p className="pl-14">{card.facilities[1]}</p>
              <p className="pl-14">{card.facilities[2]}</p>
            </div>

            <p className="leading-relaxed"> <span className="text-xl font-bold">Details :</span> {card.description}</p>
            <div className="flex gap-10 pt-5">
            <h4 className="font-bold">Open:<span className="text-purple-900">{card.opening_hours}</span></h4>
            <h4 className="font-bold">Rating:<span className="text-purple-900">{card.rating}</span></h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Single;
