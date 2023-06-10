import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';

const useUsers = () => {
    const {  loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        },
    })
    return [users, refetch]
};

export default useUsers;