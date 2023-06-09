import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import useInstructor from "../../hook/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

 
 const InstructorRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation()

    if(loading || isInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if(user && isInstructor){
        return children
    }

    return <Navigate to={'/login'} state={{from: location}} replace ></Navigate>;
 };
 
 export default InstructorRoutes;