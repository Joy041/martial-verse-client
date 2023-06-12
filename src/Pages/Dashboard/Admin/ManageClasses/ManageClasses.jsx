import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import ShowManageClass from "../../../../Map/ShowManageClass/ShowManageClass";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: services = [], refetch } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })

    const handleApprovedClasses = service => {
        axiosSecure.patch(`/services/approved/${service._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Success!',
                        text: `${service.name} is approved`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const handleDeniedClasses = service => {
        axiosSecure.patch(`/services/denied/${service._id}`)
            .then(res => {
                if (res.data.modifiedCount) {

                    refetch()
                    Swal.fire({
                        title: 'Success!',
                        text: `${service.name} is denied`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Martialverse || Dashboard || Manage Classes</title>
            </Helmet>
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
        </div>

    );
};

export default ManageClasses;