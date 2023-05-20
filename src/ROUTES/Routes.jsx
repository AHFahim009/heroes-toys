import { createBrowserRouter } from "react-router-dom";
import Layout from "../LAYOUT/Layout";
import Home from "../PAGES/HOME/Home";
import AddToys from "../PAGES/ADD TOYS/AddToys";
import MyToys from "../PAGES/MY TOYS/MyToys";
import AllToys from "../PAGES/ALL_TOYS/AllToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddToys></AddToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

export default router;
