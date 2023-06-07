import React, { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import cover from '../../assets/signup-cover-2.jpg' ;

const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const glassStyle = {
        backgroundColor: 'transparent',
        backdropFilter: 'blur(5px)',
        border: 'none',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        margin: '20px',
    };

    const onSubmit = data => {
        console.log(data);

    };
    return (
        <div style={{ backgroundImage: `url(${cover})`}} className="hero min-h-screen ">
            <div className="hero-content mt-32">
                <div style={glassStyle} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered " />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Photo URL</span>
                            </label>
                            <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered " />
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered " />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered " />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover ">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Confirm Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered " />
                          
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-transparent" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-xl font-bold'>Already have an account <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;