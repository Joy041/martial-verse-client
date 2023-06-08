import { useQuery } from '@tanstack/react-query';
import bgImg from '../../assets/bg6.jpg'
import useAxiosSecure from '../../hook/useAxiosSecure';
import ShowPopularClass from '../../Map/ShowPopularClass/ShowPopularClass';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure()

    const {data: classes = []} = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })

    return (
        <div>
            <div>
                <img src={bgImg} className=' absolute  h-[345px] md:h-72 w-full opacity-80' alt="" />
                <h1 className=' relative text-center text-white text-6xl font-extrabold pt-24 pb-[132px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)] '>Our Classes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pt-36 pb-36  bg-cyan-800'>
                {
                    classes.map(service => <ShowPopularClass
                            key={service._id}
                            service={service}
                        ></ShowPopularClass>)
                }
            </div>
        </div>
    );
};

export default Classes;