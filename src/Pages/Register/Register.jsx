import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {name, photo, email, password, confirm} = data;
        console.log(name, photo, email, password, confirm)
        if (password !== confirm) {
            alert('confirm password not match')
            return;
        }
    };

    return (
        <div>
            <Helmet>
                <title>Martialverse || Register</title>
            </Helmet>
            <div className="hero py-16 bg-slate-500">
                <div className="hero-content flex-col lg:flex-row my-16">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please register your account for take our service and connect with us!!</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" {...register("name", { required: true })} required className="input input-bordered" />
                                    {errors.name && <p className="text-red-600">This field is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="photo" {...register("photo", { required: true })} required className="input input-bordered" />
                                    {errors.photo && <p className="text-red-600">This field is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" {...register("email", { required: true })} required className="input input-bordered" />
                                    {errors.email && <p className="text-red-600">This field is required</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 30,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} required className="input input-bordered" />
                                    {errors.password && <p className="text-red-600">This field is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 8 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 30 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one lower case, one number and one special character.</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="confirm password" {...register("confirm", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 30,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} required className="input input-bordered" />
                                    {errors.confirm && <p className="text-red-600">This field is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 8 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 30 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className="bg-rose-600 btn text-white w-full text-lg web-font hover:bg-rose-400" />
                                </div>
                                <div className='form-control'>
                                    <p className='mt-3 text-center'>Already Have An Account ? <Link to='/login' className='text-decoration-none text-primary'>Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;