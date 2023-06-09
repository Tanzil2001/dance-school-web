import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import ManageUsers from "../Pages/DashBoard/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRout from "./InstructorRout";
import AddaClass from "../Pages/DashBoard/Instructor/AddaClass";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";
import Classes from "../Pages/AllClasses/Classes";
// import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/classes',
                element: <Classes/>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'manageclasses',
                element: <AdminRoute><ManageClasses/></AdminRoute>
            },
            {
                path: 'addclass',
                element: <InstructorRout><AddaClass/></InstructorRout>
            },
            
        ]
    }
])
