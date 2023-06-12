
import React from 'react';
import useAllInstructors from '../../hooks/useAllInstructors';

const AllInstructors = () => {
    const [instructors] = useAllInstructors();
    console.log(instructors);
    return (
        <div className='p-10 '>
            <div className=' mt-32'>
                <div className=' grid md:grid-cols-3 gap-5 text-blue-600'>
                    {
                        instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={instructor.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p>{instructor.email}</p>
                                <p>{instructor.role}</p>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllInstructors;