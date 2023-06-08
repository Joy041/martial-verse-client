import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import './PopularClass.css'
import ShowPopularClass from '../../../Map/ShowPopularClass/ShowPopularClass';

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosSecure.get('/services')
            return res.data
        }
    })

    return (
        <div className=" bg-fixed pt- z-20 featured-background">
            <h1 className='text-center text-white text-7xl py-16 font-bold'>Our classes</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 px-4 md:pb-12 md:px-20 lg:pb-32 lg:px-64">
                {
                    services.slice(0,6).map(service => <ShowPopularClass
                        key={service._id}
                        service={service}
                    ></ShowPopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;