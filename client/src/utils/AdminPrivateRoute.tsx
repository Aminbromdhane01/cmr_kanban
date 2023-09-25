import { Outlet } from "react-router-dom";
import decodeToken from "./decodeToken";

const AdminPrivateRoute = () => {
    
    let decoded : any = decodeToken()
    

    return decoded.isAdmin ? <Outlet /> : null;
}

export default AdminPrivateRoute
