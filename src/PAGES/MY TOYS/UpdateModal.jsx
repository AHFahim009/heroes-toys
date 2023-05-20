const UpdateModal = ({ toys, uniqueId }) => {
  const { _id, price, quantity, rating } = toys || {};
  console.log(toys);

  const handleUpdateToys = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const updateData = {
      quantity: quantity,
      price: price,
      rating: rating,
    };
    console.log(updateData);
    //update toy
    fetch(` http://localhost:5000/updateJob/${uniqueId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <form onSubmit={handleUpdateToys} className="lg:px-12 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="number"
                name="price"
                placeholder="Enter price"
                defaultValue={price}
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
                defaultValue={quantity}
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
                defaultValue={rating}
              />
            </div>
            <div>
              <input
                className="hidden"
                type="text"
                name="id"
                defaultValue={_id}
              />
            </div>
            <button
              className=" mt-5 w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Update
            </button>
          </form>
          <div className="modal-action ">
            <label htmlFor="my-modal-6">Close</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
