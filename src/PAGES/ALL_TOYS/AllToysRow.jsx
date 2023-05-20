// eslint-disable-next-line react/prop-types
const AllToysRow = ({ toys, index }) => {
  // eslint-disable-next-line react/prop-types
  const { name, seller, price, quantity, rating, subCategory } = toys;

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
        <td>View Details</td>
      </tr>
    </>
  );
};

export default AllToysRow;
