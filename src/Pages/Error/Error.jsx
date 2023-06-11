import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Martialverse || Error</title>
            </Helmet>
            <div className="max-w-lg mx-auto bg-slate-8">
                <li><Link to={'/'} className='text-xl font-mono btn bg-rose-600 hover:text-rose-600 my-8 delay-1000'>Home</Link></li>
                <img src={'https://i.ibb.co/mRpKGrp/error.webp'} className="md:pb-96" alt="" />
            </div>
        </div>
    );
};

export default Error;