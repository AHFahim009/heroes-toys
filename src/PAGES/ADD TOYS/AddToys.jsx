import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../CONTEXT-PROVIDER/AuthProvider";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const seller = form.seller.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const selected = form.selected.value;
    const description = form.description.value;
    const email = form.email.value;

    const toyData = {
      photo: photo,
      name: name,
      email: email,
      seller: seller,
      quantity: quantity,
      price: price,
      rating: rating,
      subCategory: selected,
      description: description,
    };
    console.log(toyData);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your Toys added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold mt-3 text-center tracking-widest uppercase">
        Submit Your Toy
      </h2>
      <div className=" p-4 lg:my-12 rounded shadow-lg">
        <form onSubmit={handleSubmitForm}>
          <div className=" grid lg:grid-cols-2 gap-5 ">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Picture URL of the Toy
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="photo"
                placeholder="Enter picture URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Enter toy name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Seller Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="seller"
                placeholder="Enter seller name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Seller Email
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                value={user.email}
                placeholder="Enter seller email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub-category
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="selected"
              >
                <option value="">Select a sub-category</option>
                <option value="marvel">marvel</option>
                <option value="dc">dc</option>
                <option value="disney">disney</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                name="price"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Available Quantity
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                name="rating"
                placeholder="Enter rating"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Detail Description
              </label>
              <textarea
                name="description"
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter detail description"
                rows="4"
              />
            </div>
          </div>

          <button
            className=" mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Add Toy
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
