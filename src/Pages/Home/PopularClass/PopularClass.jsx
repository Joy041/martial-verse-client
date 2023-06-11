import useAxiosSecure from '../../../hook/useAxiosSecure';
import './PopularClass.css'
import ShowPopularClass from '../../../Map/ShowPopularClass/ShowPopularClass';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClasses from '../../../hook/useClasses';

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [classes, refetch] = useClasses()

    const handleAddToSelectedSection = service => {
        const { _id, image, name, instructor_name, price, seats } = service

        if (user && user.email) {
            axiosSecure.post('/selected', { classId: _id, image, name, instructor_name, price, email: user.email, seats })
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
            <h1 className='text-center text-white text-7xl py-16 font-bold'>Our classes</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 px-4 md:pb-12 md:px-20 lg:pb-32 lg:px-64">
                {
                    classes.slice(0, 6).map(service => <ShowPopularClass
                        key={service._id}
                        service={service}
                        handleAddToSelectedSection={handleAddToSelectedSection}
                    ></ShowPopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClass;