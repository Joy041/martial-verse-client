import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import ShowManageClass from "../../../../Map/ShowManageClass/ShowManageClass";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const {data: services = []} = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })

    const handleApprovedClasses = service => {
        console.log(service)
    }

    const handleDeniedClasses = service => {
        console.log(service)
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
            {
                services.map(service => <ShowManageClass
                  key={service._id}
                  service={service}
                  handleApprovedClasses={handleApprovedClasses}
                  handleDeniedClasses={handleDeniedClasses}
                ></ShowManageClass>)
            }
        </div>
    );
};

export default ManageClasses;