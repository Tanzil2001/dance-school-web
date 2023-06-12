import React from 'react';
import useAllInstructors from '../../../hooks/useAllInstructors';

const PopularInstructur = () => {
    const [instructors] = useAllInstructors();

    return (
        <div className="p-3 mt-32">
            <p className='text-5xl my-5 font-serif font-bold text-center'>All Popular InsTructors</p>
            <p>See Your Favorite One </p>
            <div className="mt-10">
                <div className="text-blue-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {instructors.slice(0, 6).map((instructor) => (
                        <div key={instructor._id} className="card w-full md:w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img className='w-full h-[400ps]' src={instructor.image} alt="Instructor" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularInstructur;