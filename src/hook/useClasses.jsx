import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })
    return [classes, refetch];
};

export default useClasses;