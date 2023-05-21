import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../CONTEXT-PROVIDER/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  //------------------------------------

  const { user, loading } = useContext(AuthContext);
  //------------------------------------------------------------

  //----------------------------

  if (loading) {
    return <h1>loading</h1>;
  }

  if (user) {
    return children;
  }
  //---------------

  return <Navigate to="/login" replace></Navigate>;
};
export default PrivetRoute;
