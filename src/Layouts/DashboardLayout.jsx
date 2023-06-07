import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaHome } from "react-icons/fa";


const DashboardLayout = () => {
    const isInstructor = false
    const isAdmin = false
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-black ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-white ">

                    {isAdmin ? (
                        <li>
                            <NavLink to="/dashboard/adminhome">
                                <FaHome />
                                Admin Home
                            </NavLink>
                        </li>
                    ) : isInstructor ? (
                        <li>
                            <NavLink to="/dashboard/instructorhome">
                                <FaHome />
                                Instructor Home
                            </NavLink>
                        </li>
                    ) : (
                        <li><NavLink>student</NavLink></li>
                    )}

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"><FaHome />Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaHome />Order Food</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;