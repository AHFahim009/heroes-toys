import { createBrowserRouter } from "react-router-dom";
import Layout from "../LAYOUT/Layout";
import Home from "../PAGES/HOME/Home";
import AddToys from "../PAGES/ADD TOYS/AddToys";
import MyToys from "../PAGES/MY TOYS/MyToys";
import AllToys from "../PAGES/ALL_TOYS/AllToys";
import Login from "../PAGES/LOGIN/Login";
import Register from "../PAGES/REGISTER/Register";
import PrivetRoute from "./PrivetRoute";
import DisplayDetails from "../PAGES/HOME/TAB BAR/DisplayDetails";

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
        element: (
          <PrivetRoute>
            <MyToys></MyToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <DisplayDetails></DisplayDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/idToys/${params.id}`),
      },
    ],
  },
]);

export default router;
