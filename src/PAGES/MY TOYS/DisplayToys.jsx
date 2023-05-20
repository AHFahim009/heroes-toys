const DisplayToys = ({ toys, index, setUniqueId, handleDelete }) => {
  const { _id, photo, name, seller, price, description, quantity, rating } =
    toys;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <button>{index + 1}</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-20 h-20">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">Seller: {seller}</div>
            </div>
          </div>
        </td>
        <td>
          {rating} start
          <br />
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>
          love it love it
          <br />
          <span className="badge badge-ghost badge-sm">
            {quantity} piece only order fast
          </span>
        </td>
        <th>
          <label onClick={() => setUniqueId(_id)} htmlFor="my-modal-6">
            Update
          </label>
        </th>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default DisplayToys;
