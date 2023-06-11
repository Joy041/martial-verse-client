import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import bgImg from '../../assets/bg6.jpg'
import { Helmet } from "react-helmet-async";


const Instructors = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: instructors = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    return (
        <div>
            <Helmet>
                <title>Martialverse || Instructor</title>
            </Helmet>
            <div>
                <img src={bgImg} className=' absolute  h-[345px] md:h-72 w-full opacity-80' alt="" />
                <h1 className=' relative text-center text-white text-4xl md:text-6xl font-extrabold pt-24 pb-[146px] md:pb-[148px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)] '>Our Instructors</h1>
            </div>
            <div className="pt-24 pb-10 bg-cyan-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-4 lg:mx-auto">
                    {
                        instructors.map(instructor => <>
                            {
                                instructor.role === 'instructor' && <div
                                    key={instructor._id}
                                    className="mb-16"
                                >
                                    <div className="card lg:w-96 h-full bg-slate-600 shadow-xl">
                                        <figure><img src={instructor.image} className="h-56 w-full" alt="Shoes" /></figure>
                                        <div className="card-body items-center text-center text-white">
                                            <h2 className="text-3xl font-bold">{instructor.name}</h2>
                                            <p><span className="text-lg font-semibold">Instructor Email :</span> {instructor.email}</p>
                                        </div>
                                    </div>
                                </div>
                            }
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;