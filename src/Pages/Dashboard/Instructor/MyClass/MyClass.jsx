import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import ShowInstructorClass from "../../../../Map/ShowInstructorClass/ShowInstructorClass";
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";


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
            <Helmet>
                <title>Martialverse || Dashboard || My Class</title>
            </Helmet>
            <div className="bg-sky-50 px-6 py-12">
                <div className="mt-">
                    <div>
                        <table className="table w-full max-w-lg mx-auto">
                            <thead>
                                <td className="flex justify-between items-center">
                                    <th className="font-bold text-base ">STATUS</th>
                                    <th className="font-bold text-base ms-[250px]">CLASS NAME</th>
                                    <th className="font-bold text-base ms-[250px]">FEEDBACK</th>
                                    <th className="font-bold text-base ms-[290px]">ENROLLED</th>

                                </td>
                            </thead>
                            <tbody>
                                {

                                    services.map(service => <div key={service._id}>
                                        {service.instructor_name === user.displayName && <>

                                            <tr className="flex justify-between items-center">
                                                <td>{service.status}</td>
                                                <td className="ms-[190px]">{service.name}</td>
                                                <td className="ms-[180px]">{service.feedback ? <a href="#" data-toggle="tooltip" title={service.feedback}>{(service.feedback).slice(0, 15)}</a> : ''}</td>
                                                <td className="ms-[280px]">{service.booking}</td>
                                            </tr>
                                        </>}
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