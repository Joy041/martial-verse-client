import { useContext } from "react";
import useAdmin from "../../hook/useAdmin";
import useInstructor from "../../hook/useInstructor";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const ShowPopularClass = ({ service, handleAddToSelectedSection }) => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const {user} = useContext(AuthContext)

    const { image, name, instructor_name, seats, price, status } = service

    return (
        <div>
            {
                status === 'approved' &&    
                <div className="card  h-full bg-slate-800 shadow-xl">
                    <figure><img src={image} className="h-56 w-full" alt="Shoes" /></figure>
                    <div className="card-body items-center text-center text-white">
                        <h2 className="text-3xl font-bold">{name}</h2>
                        <p><span className="text-lg font-semibold">Instructor Name :</span> {instructor_name}</p>
                        <p><span className="text-lg font-semibold">Available Seats :</span> {seats}</p>
                        <p><span className="text-lg font-semibold">Price :</span> <span className="text-orange-600 font-bold">${price}</span></p>
                        <div className="card-actions">
                            <button disabled={isAdmin || isInstructor || seats===0 || !user} onClick={() => handleAddToSelectedSection(service)} className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Select</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ShowPopularClass;