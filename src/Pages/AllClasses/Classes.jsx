import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import ShowClass from './ShowClass';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: approvedClass = [] } = useQuery(['approvedClass'], async () => {
        const res = await axiosSecure.get('/approvedClasses');
        return res.data;
    })


    return (
        <div className='bg-black p-10 '>
            <div className='mt-32 grid md:grid-cols-3 gap-8'>
                {
                    approvedClass.map(approvedCls => <ShowClass
                        key={approvedCls._id}
                        approvedCls={approvedCls}
                    ></ShowClass>)
                }
            </div>
        </div>
    );
};

export default Classes;