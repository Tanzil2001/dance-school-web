import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MainLayout = () => {
    const {dark} = useContext(AuthContext);
    return (
        <div className={`${dark? 'bg-black text-white': 'bg-white'}`}>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;