import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../../assets/banner7.jpeg'
import banner2 from '../../../assets/banner1.webp'
import banner3 from '../../../assets/banner3.webp'
import { Link } from 'react-router-dom';


const Banner = () => {

    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: true,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        > <SwiperSlide>
                <div className='relative'>
                    <img src={banner1} className='w-full h-[850px] ' alt="" />
                    <div className='absolute top-44 md:top-1/4 text-white right- md:right-1/2 p-6 bg-gradient-to-r from-[rgba(21, 21, 21, 0)] to-[rgba(21, 21, 21, 0)]'>
                        <p className=' text-xl md:text-5xl font-bold'>WELCOME TO MARTIAL <br /> ARTS SCHOOL <br /> EVERY GREAT JOURNEY <br /> STARTS WITH <br /> <span className='text-rose-600'>ONE STEP!</span> </p>
                        <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, iste nobis aliquid <br /> totam hic tempore nesciunt! Delectus explicabo, sed tempora non error <br /> nesciunt enim optio?</p>
                        <Link><button className="btn bg-rose-600 border-0 text-white text-base px-8 mt-8 hover:bg-rose-400">Our Service</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img src={banner2} className='w-full h-[850px] ' alt="" />
                    <div className='absolute top-44 md:top-1/4 text-white right- md:right-1/2 p-6 bg-gradient-to-r from-[rgba(21, 21, 21, 0)] to-[rgba(21, 21, 21, 0)]'>
                        <p className=' text-xl md:text-5xl font-bold'>WELCOME TO MARTIAL <br /> ARTS SCHOOL <br /> EVERY GREAT JOURNEY <br /> STARTS WITH <br /> <span className='text-rose-600'>ONE STEP!</span> </p>
                        <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, iste nobis aliquid <br /> totam hic tempore nesciunt! Delectus explicabo, sed tempora non error <br /> nesciunt enim optio?</p>
                        <Link><button className="btn bg-rose-600 border-0 text-white text-base px-8 mt-8 hover:bg-rose-400">Our Service</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative'>
                    <img src={banner3} className='w-full h-[850px] ' alt="" />
                    <div className='absolute top-44 md:top-1/4 text-white right- md:right-1/2 p-6 bg-gradient-to-r from-[rgba(21, 21, 21, 0)] to-[rgba(21, 21, 21, 0)]'>
                        <p className=' text-xl md:text-5xl font-bold'>WELCOME TO MARTIAL <br /> ARTS SCHOOL <br /> EVERY GREAT JOURNEY <br /> STARTS WITH <br /> <span className='text-rose-600'>ONE STEP!</span> </p>
                        <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, iste nobis aliquid <br /> totam hic tempore nesciunt! Delectus explicabo, sed tempora non error <br /> nesciunt enim optio?</p>
                        <Link><button className="btn bg-rose-600 border-0 text-white text-base px-8 mt-8 hover:bg-rose-400">Our Service</button></Link>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>

    );
};
// [#151515]
export default Banner;