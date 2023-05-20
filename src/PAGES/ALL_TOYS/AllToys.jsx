import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  // renders all toys form server
  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

  return (
    <div className="lg:mt-6">
      <div className="flex justify-center items-center gap-4 mb-6">
        <label htmlFor="">Search you toy</label>
        <input
          className=" bg-gray-300 py-2 border-2"
          type="search"
          name=""
          id=""
        />
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toys, index) => (
              <AllToysRow index={index} key={toys._id} toys={toys}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
