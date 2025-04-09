import { Navigate, useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const privateKey = localStorage.getItem("privateKey");
  if (!privateKey) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default PrivateRoute;
