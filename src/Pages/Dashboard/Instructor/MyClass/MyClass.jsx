import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ShowInstructorClass from "../../../../Map/ShowInstructorClass/ShowInstructorClass";


const MyClass = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: services = [] } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            console.log(res.data)
            return res.data
        }
    })

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
            {
                services.map(service => <ShowInstructorClass
                    key={service._id}
                    service={service}
                ></ShowInstructorClass>)
            }
        </div>
    );
};

export default MyClass;