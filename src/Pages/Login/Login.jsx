import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";



const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const {login, passwordReset} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()
    const [error, setError] = useState('')

    const from = location.state?.from?.pathname || '/' 


    const onSubmit = data => {
        const { email, password } = data;
        console.log(email, password)

        login(email, password)
        .then((result) => {
            console.log(result)
            reset()
            navigate(from, {replace: true})
            Swal.fire({
                title: 'Success!',
                text: 'Login successful',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        })
        .catch(error => setError(error.message))
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        passwordReset(email)
        .then(() => {
            alert('Check your email')
            return
        })
        .catch(error => setError(error.message))
    }

    return (
        <div>
            <Helmet>
                <title>Martialverse || Login</title>
            </Helmet>
            <div className="hero py-40 bg-slate-500 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Please login your account for take our service and connect with us!!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full md:w-[500px] shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" ref={emailRef} {...register("email", { required: true })} required className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" {...register("password", { required: true })} required className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" onClick={handleForgotPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <p className="text-red-600">{error}</p>
                                    <input type="submit" value="Login" className="bg-rose-600 btn text-white w-full text-lg web-font hover:bg-rose-400" />
                                </div>
                                <div className='form-control'>
                                    <p className='mt-3 text-center'>Do not Have An Account ? <Link to='/register' className='text-decoration-none text-primary'>Register</Link></p>
                                    <SocialLogin setError={setError}></SocialLogin>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;