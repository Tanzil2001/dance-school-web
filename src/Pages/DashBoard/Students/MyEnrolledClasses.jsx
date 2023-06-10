import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyEnrolledClasses = () => {
  

    const [axiosSecure] = useAxiosSecure();
    const { data: enrolled=[] }= useQuery(['enrolled'], async ()=>{
        const res = await axiosSecure.get('/enrolled');
        return res.data;
    })

    return (
        <div>
            {enrolled.length}
        </div>
    );
};

export default MyEnrolledClasses;