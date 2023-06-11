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
        <div>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    popularClass.map(pclass => <div className='card card-compact w-96 bg-base-100 shadow-xl' >
                        <figure><img className='w-full h-[300px]' src={pclass.classImage} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{pclass.className}</h2>
                            <p>{pclass.seats}</p>
                            <p>{pclass.price}</p>
                            <p>{pclass.totalStudent}</p>
                            <div className="card-actions justify-end">
                              
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;