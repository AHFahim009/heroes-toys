const DetailsModal = ({ sub }) => {
  const { _id, photo, name, price, rating, description, quantity } = sub;

  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal f ">
        <div className="modal-box w-96 ">
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <h3 className="font-bold text-lg">
              Available Quantity: {quantity}
            </h3>
            <p className="py-4">{description}</p>
            <div className="modal-action"></div>
            <label htmlFor="my-modal-5" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsModal;
