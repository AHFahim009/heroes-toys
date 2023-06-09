import { useContext, useEffect, useState } from "react";
import DisplayToys from "./DisplayToys";
import UpdateModal from "./UpdateModal";
import Swal from "sweetalert2";
import { AuthContext } from "../../CONTEXT-PROVIDER/AuthProvider";

const MyToys = () => {
  useEffect(() => {
    document.title = "Heroes - MyToys";
  }, []);
  const [myToys, setMyToys] = useState([]);
  const [uniqueId, setUniqueId] = useState(null);
  const { user } = useContext(AuthContext);
  console.log(uniqueId);
  // fetching my toys from server
  useEffect(() => {
    fetch(`https://11-assignment-server-site.vercel.app/myToys/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  // delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",

      // delete data from server
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://11-assignment-server-site.vercel.app/deleteToy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="lg:mt-8">
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="text-2xl">
                Name/<span className="">Seller</span>
              </th>
              <th className="text-2xl">
                Rating/<span className="">Price</span>
              </th>
              <th className="text-2xl">
                Review/<span className="">Available</span>
              </th>
              <th>Update </th>
              <th>Delete </th>
            </tr>
          </thead>

          <tbody>
            {myToys.map((toys, index) => (
              <>
                <DisplayToys
                  key={toys._id}
                  index={index}
                  setUniqueId={setUniqueId}
                  handleDelete={handleDelete}
                  toys={toys}
                />
                <UpdateModal uniqueId={uniqueId} toys={toys} />
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
