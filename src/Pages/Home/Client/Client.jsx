import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Client = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews')
            return res.data
        }
    })

    return (
        <div>
            <div className="py-32 bg-slate-900">
                <p className="text-center text-rose-600 text-6xl font-bold">WHAT CLIENTS SAY</p>
                <hr className="w-20 mx-auto my-10 text-center border-red-500" />
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="flex flex-col items-center mb-10">
                                <img src={review.image} className="w-28 h-28 rounded-full mb-3" alt="" />
                                <h1 className="text-4xl font-bold text-white mb-2">{review.name}</h1>
                                <p className="text-xl text-rose-600 mb-2">{review.title}</p>
                                <p className="mx-44 text-white text-center text-xl font-thin">{review.details}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>

    );
};

export default Client;