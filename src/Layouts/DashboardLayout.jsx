import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const DashboardLayout = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-black ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-white ">

                    {isAdmin ? (
                        <><li><NavLink to="/dashboard/manageclasses">Manage Classes</NavLink>
                        </li>
                            <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink>
                            </li></>
                    ) : isInstructor ? (
                        <><li><NavLink to="/dashboard/addclass">Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myclass">My Classes</NavLink></li>
                        </>
                    ) : (
                        <><li><NavLink to="/dashboard/myselectedclasses">My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myenrolledclasses">My Enrolled Classes</NavLink></li></>
                    )}

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;