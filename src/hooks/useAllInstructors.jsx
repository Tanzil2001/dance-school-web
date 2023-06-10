import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructors');
        return res.data;
    })
    return [instructors]
};

export default useAllInstructors;