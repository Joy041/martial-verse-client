import banner from '../../../assets/banner.webp'
import banner2 from '../../../assets/banner-2.jpg'
import banner3 from '../../../assets/banner1.webp'
import { Link } from 'react-router-dom';


const Banner = () => {

    return (
        <div className='relative'>
            <img src={banner3} className='w-full h-[850px] ' alt="" />
            <div className='absolute top-44 md:top-1/4 text-white right- md:right-1/2 p-6 bg-gradient-to-r from-[rgba(21, 21, 21, 0)] to-[rgba(21, 21, 21, 0)]'>
                <p className=' text-xl md:text-5xl font-bold'>WELCOME TO MARTIAL <br /> ARTS SCHOOL <br /> EVERY GREAT JOURNEY <br /> STARTS WITH <br /> <span className='text-rose-600'>ONE STEP!</span> </p>
                <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, iste nobis aliquid <br /> totam hic tempore nesciunt! Delectus explicabo, sed tempora non error <br /> nesciunt enim optio?</p>
                <Link><button className="btn bg-rose-600 border-0 text-white text-base px-8 mt-8 hover:bg-rose-400">Our Service</button></Link>
            </div>
        </div>

    );
};
// [#151515]
export default Banner;