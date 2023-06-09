import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const DisplayDetails = () => {
  useEffect(() => {
    document.title = "Heroes - Details";
  }, []);
  const subDetails = useLoaderData();
  const { photo, name, seller, price, rating, quantity, description } =
    subDetails;
  return (
    <div className="card lg:card-side  py-8 ">
      <figure className="w-full lg:w-1/2 h-full lg:h-96">
        <img src={photo} className="h-full object-fill rounded-xl" />
      </figure>
      <div className="card-body w-full lg:w-1/2">
        <h2 className="card-title">{name}</h2>
        <p>Seller Name: {seller}</p>
        <p>Price: {price}$</p>
        <p>Rating: {rating} start</p>
        <p>Quantity: {quantity} (stock limited)</p>
        <p>Description: {description}</p>
      </div>
    </div>
  );
};

export default DisplayDetails;
