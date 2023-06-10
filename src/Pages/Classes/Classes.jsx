import bgImg from '../../assets/bg6.jpg'
import useAxiosSecure from '../../hook/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useClasses from '../../hook/useClasses';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [classes, refetch] = useClasses()

    const handleAddToSelectedSection = service => {

        const { _id, image, name, instructor_name, price } = service

        if (user && user.email) {
            axiosSecure.post('/selected', { classId: _id, image, name, instructor_name, price, email: user.email })
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Successfully selected',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please login for select this class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div>
                <img src={bgImg} className=' absolute  h-[345px] md:h-72 w-full opacity-80' alt="" />
                <h1 className=' relative text-center text-white text-4xl md:text-6xl font-extrabold pt-24 pb-[146px] md:pb-[148px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)] '>Our Classes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-24 bg-cyan-800'>
                {
                    classes.map(service => <>
                        {
                            service.status === 'approved' && <div className="card  h-full bg-slate-800 shadow-xl">
                                <figure><img src={service.image} className="h-56 w-full" alt="Shoes" /></figure>
                                <div className="card-body items-center text-center text-white">
                                    <h2 className="text-3xl font-bold">{service.name}</h2>
                                    <p><span className="text-lg font-semibold">Instructor Name :</span> {service.instructor_name}</p>
                                    <p><span className="text-lg font-semibold">Available Seats :</span> {service.seats}</p>
                                    <p><span className="text-lg font-semibold">Price :</span> <span className="text-orange-600 font-bold">${service.price}</span></p>
                                    <div className="card-actions">
                                        <button onClick={() => handleAddToSelectedSection(service)} className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Select</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </>)
                }
            </div>
        </div>
    );
};

export default Classes;