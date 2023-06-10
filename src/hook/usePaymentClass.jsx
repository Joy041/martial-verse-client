import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const usePaymentClass = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure() 

    const {data: paymentClass = [], refetch} = useQuery({
        queryKey: ['payment', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/payments?email=${user?.email}`)
            return res.data
        }
    })

    return [paymentClass, refetch];
};

export default usePaymentClass;