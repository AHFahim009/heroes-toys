const DisplayToys = ({ toys }) => {
  const { photo, name, seller, price, description, rating } = toys;
  return (
    <div>
      <div className="card lg:card-side bg-gray-100 flex ">
        <figure className="w-full lg:w-[50%]  rounded-lg ">
          <img className="object-cover rounded-xl" src={photo} alt="Album" />
        </figure>
        <div className="card-body w-full lg:w-[50%] ">
          <div className="divide-y-2 divide-red-500 space-y-2">
            <h2 className="card-title text-pink-800">Name: {name}</h2>
            <p className="">Seller Name: {seller}</p>
            <p className="">Price: {price}</p>
            <p className="">Rating: {rating}</p>
            <p className="">Description: {description}</p>
          </div>

          <div className="card-actions justify-around mt-3">
            <button className="btn btn-outline">Update</button>
            <button className="btn btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayToys;
