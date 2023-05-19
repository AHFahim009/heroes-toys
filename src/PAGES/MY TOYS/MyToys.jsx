import { useEffect, useState } from "react";
import DisplayToys from "./DisplayToys";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);

  // fetching my toys from server
  useEffect(() => {
    fetch("http://localhost:5000/myToys/princess@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <div>
      {myToys.map((toys) => (
        <DisplayToys key={toys._id} toys={toys}></DisplayToys>
      ))}
    </div>
  );
};

export default MyToys;
