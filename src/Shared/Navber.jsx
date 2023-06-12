import { Link } from "react-router-dom";
import logo from '../assets/dance-logo-dark-1.webp';
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useSelecedClass from "../hooks/useSelecedClass";
import { FaShoppingCart } from "react-icons/fa";


const Navber = () => {

    const [selectedCls] = useSelecedClass();
    const { user, logOut, dark, setDark } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className="text-xl font-bold"><Link to="/">Home</Link></li>
        <li className="text-xl font-bold"><Link to="/instructors">Instructors</Link></li>
        <li className="text-xl font-bold"><Link to="/classes">Classes</Link></li>
        {
            user ? <>
                <li className="text-xl font-bold"><Link to="/dashboard">Dashboard </Link></li>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li className="text-xl font-bold"><Link to="/login">Login</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar mt-10 flex items-center justify-between fixed z-10 bg-opacity-20 rounded-full px-5 max-w-screen-2xl md:max-w-screen-xl md:ml-40 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="mx-3" ><FaShoppingCart/><p className="text-xl">{selectedCls.length}</p> </div>

                <img className="w-16 h-16 rounded-full" src={user?.photoURL} alt="" />
                <button className="btn btn-primary" onClick={() => setDark(!dark)}>{dark ? 'dark' : 'light'}</button>
            </div>
        </>
    );
};

export default Navber;