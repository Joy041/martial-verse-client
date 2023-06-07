import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";


const Instructor = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axiosSecure.get('/instructors')
            return res.data
        }
    })

    return (
        <div className="bg-cyan-50 pb-28 px-4">
            <h1 className="text-center text-5xl md:text-7xl pt-28 pb-20 font-bold">Our Instructors</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                // grabCursor={true}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 1
                        },
                        520: {
                            slidesPerView: 2
                        },
                        950: {
                            slidesPerView: 3
                        }
                    }
                }

                modules={[Autoplay, Pagination, Navigation]}

                className="mySwiper"
            >
                {
                    instructors.slice(0, 6).map(instructor => <SwiperSlide
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
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Instructor;