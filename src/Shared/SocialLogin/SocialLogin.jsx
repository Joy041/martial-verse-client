import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGithub, FaGoogle } from "react-icons/fa";
import axios from "axios";



const SocialLogin = ({ setError }) => {
    const { googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)

                axios.post('https://martial-verse-server-joy041.vercel.app/users', { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role: 'student' })
                    .then(() => {
                        navigate(from, { replace: true })
                        Swal.fire({
                            title: 'Success!',
                            text: 'Welcome to Martialverse',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    })
            })
            .catch(error => setError(error.message))
    }

    const handleGithubRegister = () => {
        githubLogin()
            .then(result => {
                const loggedUser = result.user;

                axios.post('https://martial-verse-server-joy041.vercel.app/users', { name: loggedUser.displayName, email: loggedUser.email, image: loggedUser.photoURL, role: 'student' })
                .then(() => {
                    navigate(from, { replace: true })
                    Swal.fire({
                        title: 'Success!',
                        text: 'Welcome to Martialverse',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div className="divider"></div>
            <button type="submit" onClick={handleGoogleRegister} className=' btn w-full bg-white text-black font-semibold'>
                <FaGoogle className='me-2'></FaGoogle> Register with Google
            </button>
            <button type="submit" onClick={handleGithubRegister} className='btn w-full bg-white text-black font-semibold mt-4'>
                <FaGithub className='me-2'></FaGithub> Register with Github
            </button>
        </div>
    );
};

export default SocialLogin;