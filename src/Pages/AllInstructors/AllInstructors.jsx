import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AllInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors=[] }= useQuery(['instructors'], async ()=>{
        const res = await axiosSecure.get('/instructors');
        return res.data;
    })

    return (
        <div>
            {instructors.length}
        </div>
    );
};

export default AllInstructors;