import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: approvedClass=[]} = useQuery(['approvedClass'],async ()=>{
        const res =  await axiosSecure.get('/approvedClasses');
        return res.data;
    })

    return (
        <div>
            {approvedClass.length}
        </div>
    );
};

export default Classes;