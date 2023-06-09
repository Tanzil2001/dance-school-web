import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: simillerEmail=[]} = useQuery(['simillerEmail'], async ()=>{
        const res = await axiosSecure.get(`/email?email=${user?.email}`)
        return res.data;
    })
    return (
        <div>
            {
                simillerEmail.length
            }
        </div>
    );
};

export default MyClasses;