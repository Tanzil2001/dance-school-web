import React from 'react';
import image from '../../../assets/girl.jpg';
import { FaQuoteLeft } from 'react-icons/fa';

const ExtraSection1 = () => {
    return (
        <div className=' bg-slate-200 md:flex justify-evenly items-center'>
            <div className='md:w-1/2'>
                <p className='text-xl text-slate-600 uppercase font-semibold'>When the dancer disappears, the dance remains...</p>
                <h2 className='text-5xl my-5 text underline text-purple-600 font-bold '>Leading to the dance of heart...</h2>
                <div className='flex gap-5 mt-10'>
                    <p className='text-3xl'><FaQuoteLeft/></p>
                <p className='text-lg text-slate-500'>Dance as if nobody is watching. Enjoy each step along the way that takes you into the unknown space.  Let go and allow your life play out its dance on the edge of time like dew drops on the tip of a leaf…melt into the moment that is available!</p>
                </div>
            </div>
            <div className='mt-32'>
                <img className='border-8 border-white' src={image} alt="" />
            </div>
        </div>
    );
};

export default ExtraSection1;