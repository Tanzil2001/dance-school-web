import React from 'react';
import useAllInstructors from '../../../hooks/useAllInstructors';

const PopularInstructur = () => {
    const [instructors] = useAllInstructors();

    return (
        <div className='p-10 '>
            <div className=' mt-32'>
                <div className=' grid md:grid-cols-3 gap-5'>
                    {
                        instructors.slice(0, 6).map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={instructor.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.name}</h2>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructur;