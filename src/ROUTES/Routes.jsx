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
import ErrorPage from "../PAGES/ErrorPage";
import Blogs from "../PAGES/BLOG_SECTION/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: (
          <PrivetRoute>
            <AddToys></AddToys>
          </PrivetRoute>
        ),
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
          fetch(
            `https://11-assignment-server-site.vercel.app/idToys/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
