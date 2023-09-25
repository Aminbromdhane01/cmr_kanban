import { Outlet} from "react-router-dom";

const AuthPrivateroutes = () => {
  let auth = localStorage.getItem('token');

  if (auth) return null;

  return <Outlet />;
};

export default AuthPrivateroutes;
