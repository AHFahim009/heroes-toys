import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../CONTEXT-PROVIDER/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
  //------------------------------------
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  //------------------------------------------------------------

  if (loading) {
    return <h1>loading</h1>;
  }

  if (user) {
    return children;
  }
  //---------------

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivetRoute;
