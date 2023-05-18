import { createBrowserRouter } from "react-router-dom";
import Layout from "../LAYOUT/Layout";
import Home from "../PAGES/HOME/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
