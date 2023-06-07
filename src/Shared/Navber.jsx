import { Link } from "react-router-dom";
import logo from '../assets/dance-logo-dark-1.webp' ;
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navber = () => {
    const {user} = useContext(AuthContext);
    const navOptions = <>
        <li className="text-xl font-bold"><Link to="/">Home</Link></li>
        <li className="text-xl font-bold"><Link to="/">Instructors</Link></li>
        <li className="text-xl font-bold"><Link to="/order/salad">Classes</Link></li>
        {
            user ? <>
                <li className="text-xl font-bold"><Link>Dashboard </Link></li>
                <button className="btn btn-ghost">LogOut</button>
                <img src={user.photoURL} alt="" />
                <p>{user.displayName}</p>
            </> : <>
                <li className="text-xl font-bold"><Link to="/login">Login</Link></li>
            </>
        }
    </>
    return (
        <>
            <div className="navbar mt-10  fixed z-10 bg-opacity-0 max-w-screen-xl ml-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a> */}
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navber;