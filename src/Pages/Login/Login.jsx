import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cover1 from '../../assets/signup-cover.avif';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                console.log(loggedUser);
                fetch('https://a-dance-school-server-tanzil2001.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })

            })
    }


    return (
        <div style={{ backgroundImage: `url(${cover1})` }} className="hero min-h-screen ">
            <div className="hero-content mt-32">
                <div style={glassStyle} className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered " />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>

                        <div className="relative form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                            })} placeholder="password" className="input input-bordered " />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 top-10 right-0 flex items-center px-3"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-transparent" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-xl font-bold'>Are You New Here? please <Link className='text-blue-600' to="/signup">Register</Link></p>
                    <div className="divider"></div>
                    <div className="text-center w-full my-4">
                        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                            <FaGoogle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;