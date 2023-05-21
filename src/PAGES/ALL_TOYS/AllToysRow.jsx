import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllToysRow = ({ toys, index }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, seller, price, quantity, rating, subCategory } = toys;

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{seller}</td>
        <td>{name}</td>
        <td>{subCategory} universe</td>
        <td>{price}$</td>
        <td>{rating} start</td>
        <td>{quantity} pieces (stock limited)</td>
        <td>
          <Link to={`/details/${_id}`}>View Details</Link>
        </td>
      </tr>
    </>
  );
};

export default AllToysRow;
