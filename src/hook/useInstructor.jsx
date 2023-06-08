import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const {data: isInstructor, isLoading: isAdminLoading} = useQuery({
        queryKey: ['instructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`)
            return res.data.instructor
        }
    })

    return [isInstructor, isAdminLoading];
};

export default useInstructor;