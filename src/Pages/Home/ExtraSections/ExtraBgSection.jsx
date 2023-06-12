import React from 'react';
import bg from '../../../assets/bg-img.jpg';
import { FaCheck } from 'react-icons/fa';

const ExtraBgSection = () => {
    return (
        <div className='bg-blend-overlay bg-pink-500 bg-fixed transition duration-700 ease-in-out hover:scale-110' style={{ backgroundImage: `url('${bg}')`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            <div>
                <div className='text-center '>
                    <h2 className='mt-5 pt-5 text-white text-3xl uppercase '>We make you dance. Want to?</h2>
        
                    <p className='pt-4 text-white text-5xl uppercase'>We Write</p>
                </div>
                <div className='mt-32 md:flex md:ml-44 '>
                    <div className='bg-white text-black hover:bg-black hover:text-white w-72 p-8 py-5 h-[500px] border-r-2 transition duration-700 ease-in-out hover:scale-110'>
                        <p className=' text-xl font-semibold'>2 Class a Week</p>
                        <p className=' text-lg font-semibold my-3'>Billed annually or $ 10 monthly</p>
                        <p><span className='text-3xl mt-2 font-bold'>$ 100/</span>Year</p>
                        <hr className='mt-3' />
                        <div className='mt-20 space-y-5'>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Person</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Trainer</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Course</span>
                        </div>
                        <div className='mt-20 border-double border-4 border-purple-600 text-center py-2 hover:bg-purple-600'>
                            <button>Enroll Class</button>
                        </div>
                    </div>
                    <div className='bg-white text-black hover:bg-black hover:text-white w-72 p-8 py-5 h-[500px] border-r-2 transition duration-700 ease-in-out hover:scale-110'>
                        <p className=' text-xl font-semibold'>2 Class a Week</p>
                        <p className=' text-lg font-semibold my-3'>Billed annually or $ 10 monthly</p>
                        <p><span className='text-3xl mt-2 font-bold'>$ 100/</span>Year</p>
                        <hr className='mt-3' />
                        <div className='mt-20 space-y-5'>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Person</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Trainer</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Course</span>
                        </div>
                        <div className='mt-20 border-double border-4 border-purple-600 text-center py-2 hover:bg-purple-600'>
                            <button>Enroll Class</button>
                        </div>
                    </div>
                    <div className='bg-white text-black hover:bg-black hover:text-white w-72 p-8 py-5 h-[500px] border-r-2 transition duration-700 ease-in-out hover:scale-110'>
                        <p className=' text-xl font-semibold'>2 Class a Week</p>
                        <p className=' text-lg font-semibold my-3'>Billed annually or $ 10 monthly</p>
                        <p><span className='text-3xl mt-2 font-bold'>$ 100/</span>Year</p>
                        <hr className='mt-3' />
                        <div className='mt-20 space-y-5'>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Person</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Trainer</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Course</span>
                        </div>
                        <div className='mt-20 border-double border-4 border-purple-600 text-center py-2 hover:bg-purple-600 '>
                            <button>Enroll Class</button>
                        </div>
                    </div>
                    <div className='bg-white text-black hover:bg-black  hover:text-white w-72 p-8 py-5 h-[500px] transition duration-700 ease-in-out hover:scale-110'>
                        <p className=' text-xl font-semibold'>2 Class a Week</p>
                        <p className=' text-lg font-semibold my-3'>Billed annually or $ 10 monthly</p>
                        <p><span className='text-3xl mt-2 font-bold'>$ 100/</span>Year</p>
                        <hr className='mt-3' />
                        <div className='mt-20 space-y-5'>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Person</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Trainer</span>
                            <span className='flex items-center gap-3'><FaCheck /> 1 Course</span>
                        </div>
                        <div className='mt-20 border-double border-4 border-purple-600 text-center py-2 hover:bg-purple-600'>
                            <button>Enroll Class</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraBgSection;