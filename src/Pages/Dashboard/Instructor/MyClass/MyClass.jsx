import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import ShowInstructorClass from "../../../../Map/ShowInstructorClass/ShowInstructorClass";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";


const MyClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)

    const { data: services = [] } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            console.log(res.data)
            return res.data
        }
    })

    return (
        <div className="my-16">
            <div className="bg-sky-50 px-6 py-12">
                <div className="mt-9">
                    <div className="overflow-x-auto w-ful   ">
                        <table className="table w-ful">
                            <thead>
                                <td className="flex justify-between">
                                    <th className="font-bold text-base">IMAGE</th>
                                    <th className="font-bold text-base">CLASS NAME</th>
                                    <th className="font-bold text-base">PRICE</th>
                                </td>
                            </thead>
                            <tbody>
                                {

                                    services.map(service => <div key={service._id}>
                                        {service.instructor_name === user.displayName && <tr className="flex justify-between">
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={service.image} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {service.name}
                                            </td>
                                            <td><span className='text-orange-500'>${service.price}</span></td>
                                        </tr>}
                                    </div>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClass;