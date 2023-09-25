import { Outlet, Navigate } from "react-router-dom";

const Privateroutes = () => {
  let auth = localStorage.getItem('token');

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default Privateroutes;
