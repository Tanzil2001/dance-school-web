import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularClass = [] } = useQuery(['popularClass'], async () => {
        const res = await axiosSecure.get('/popularClass');
        return res.data;
    })
    return (
        
        <div className='p-3 mt-32'>
            <p className='text-5xl my-5 font-serif font-bold text-center'>All Popular Classes</p>
            <div className="text-blue-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {popularClass.slice(0,9).map((pclass) => (
                    <div className="card card-compact w-full md:w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img className="w-full  h-72" src={pclass.classImage} alt="Shoes" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{pclass.className}</h2>
                            <p className='text-xl'>Available Seats : <span className='text-orange-700 text-2xl'>{pclass.seats}</span> </p>
                            <p className='text-xl'>Price: <span className='text-orange-700 text-2xl'>$ {pclass.price}</span> </p>
                            <p className='text-xl'>Total Stu: <span className='text-orange-700 text-2xl'>{pclass.totalStudent}</span> </p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularClasses;