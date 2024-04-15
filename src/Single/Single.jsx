import { useLoaderData, useParams } from "react-router-dom";

const Single = () => {

  const single = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = single.find((card) => card.id == idInt);
 
  return (
    <div className=" container mx-auto mt-10">
      <h2>{card.id}</h2>
     
    </div>
  );
};

export default Single;