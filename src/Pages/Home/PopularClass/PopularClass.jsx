import useAxiosSecure from '../../../hook/useAxiosSecure';
import './PopularClass.css'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import useClasses from '../../../hook/useClasses';
import { useQuery } from '@tanstack/react-query';
import useAdmin from '../../../hook/useAdmin';
import useInstructor from '../../../hook/useInstructor';

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    // const [classes, refetch] = useClasses()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['popular'],
        queryFn: async () => {
            const res = await axiosSecure.get('/popular')
            return res.data
        }
    })

    const handleAddToSelectedSection = service => {
        const { _id, image, name, instructor_name, price, seats, booking } = service

        if (user && user.email) {
            axiosSecure.post('/selected', { classId: _id, image, name, instructor_name, price, email: user.email, seats, booking })
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
        <div className=" bg-fixed pt- z-20 featured-background">
            <h1 className='text-center text-white text-7xl py-16 font-bold'>Popular classes</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 px-4 md:pb-12 md:px-20 lg:pb-32 lg:px-64">
                {
                    classes.slice(0, 7).map(service =>  <>
                        {
                            service.status === 'approved' &&    
                            <div className="card  h-full bg-slate-800 shadow-xl">
                                <figure><img src={service.image} className="h-56 w-full" alt="Shoes" /></figure>
                                <div className="card-body items-center text-center text-white">
                                    <h2 className="text-3xl font-bold">{service.name}</h2>
                                    <p><span className="text-lg font-semibold">Instructor Name :</span> {service.instructor_name}</p>
                                    <p><span className="text-lg font-semibold">Available Seats :</span> {service.seats}</p>
                                    <p><span className="text-lg font-semibold">Price :</span> <span className="text-orange-600 font-bold">${service.price}</span></p>
                                    <div className="card-actions">
                                        <button disabled={isAdmin || isInstructor || service.seats===0 || !user} onClick={() => handleAddToSelectedSection(service)} className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Select</button>
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

export default PopularClass;