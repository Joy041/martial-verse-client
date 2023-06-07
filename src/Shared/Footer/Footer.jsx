import { FaPhoneAlt } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className=" py-8 bg-neutral text-neutral-content px-4">
            <div className="flex justify-evenly flex-col md:flex-row max-w-screen-xl mx-auto">
                <div>
                    <p><span className='text-4xl font-bold text-white'>MARTIAL</span><span className='text-lime-500 text-2xl'> verse</span></p>
                    <p className='text-2xl font-thin mt-6'>Martial verse academy has specialized in martial arts <br /> since 1986 and has one of the most <br /> innovative programs in the nation.</p>
                    <p className='text-2xl font-thin mt-6 flex items-center'><TiLocation className='me-1'></TiLocation>Season Street 45/2, Los Angeles</p>
                    <p className='text-2xl font-thin mt-1 flex items-center'><FaPhoneAlt className='me-1'></FaPhoneAlt>+91-202-245-4510</p>
                    <p className='text-2xl font-thin mt-1 flex items-center'><HiMail className='me-1'></HiMail>martial@gmail.com</p>
                    <div className="flex mt-7">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a className='mx-3'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className=" text-2xl font-semibold mt-16 md:mt-0">SUBSCRIBE NOW</h1>
                    <p className='text-base text-gray-500 mt-6'>Subscribe to our Newsletter to be updated. <br /> We promise not to spam.</p>
                    <input type="email" placeholder="Your email" className="input input-bordered w-full max-w-xs mt-8" />
                    <button className="btn bg-rose-600 border-0 text-white text-base mt-3 hover:bg-rose-400">SUBSCRIBE</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;