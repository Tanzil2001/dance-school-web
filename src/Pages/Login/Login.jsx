import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import cover1 from '../../assets/signup-cover.avif';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {signIn, googleSignIn} = useContext(AuthContext);

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
        })

    };
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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-xl">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                            })} placeholder="password" className="input input-bordered " />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary bg-transparent" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-xl font-bold'>Are You New Here? please <Link className='text-blue-600' to="/signup">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;