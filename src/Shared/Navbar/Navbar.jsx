import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import useAdmin from '../../hook/useAdmin';
import useInstructor from '../../hook/useInstructor';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Logout Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            })
    }

    const navItem = <div className='lg:flex items-center md:text-white '>
        <li><Link to={'/'} className='text-xl font-mono hover:text-rose-600'>Home</Link></li>
        <li><Link to={'/instructors'} className='text-xl font-mono hover:text-rose-600'>Instructors</Link></li>
        <li><Link to={'/classes'} className='text-xl font-mono hover:text-rose-600'>Classes</Link></li>
        {
            user ? <li><Link to={isAdmin && '/dashboard/manageclass' || isInstructor && '/dashboard/myclass'  || '/dashboard/selectclass'} className='text-xl font-mono hover:text-rose-600'>Dashboard</Link></li> : ''
        }
        <div className='md:ms-2 flex items-center gap-3'>
            {
                user ? <div><a href="#" data-toggle="tooltip" title={`${user?.displayName}`}><img className="rounded-full w-8" src={user?.photoURL} alt="" /></a></div> : ''
            }
            {
                user ? <Link to={'/login'}><button className="text-base font-bold flex items-center btn bg-rose-600 hover:bg-rose-400 border-0 text-white" onClick={handleLogout} ><span className="me-1">LOGOUT</span></button></Link> : <Link to={'/login'}><button className="btn bg-rose-600 hover:bg-rose-400 text-base font-bold flex items-center border-0 text-white"><span className="me-1">LOGIN</span></button></Link>
            }
        </div>
    </div>

    return (
        <div className="navbar fixed z-10 opacity-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <p className="normal-case text-xl"><span className='text-4xl font-bold text-white'>MARTIAL</span><span className='text-lime-500 text-2xl'> verse</span></p>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;