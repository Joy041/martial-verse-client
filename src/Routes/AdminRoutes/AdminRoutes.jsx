import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import useAdmin from "../../hook/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to={'/'} state={{from: location}} replace ></Navigate>;
};

export default AdminRoutes;