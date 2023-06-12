import React from 'react';
import image from '../../../assets/dance-girl.webpbig.webp';
import item1 from '../../../assets/icon1.webp'
import item2 from '../../../assets/icon2.webp'
import item3 from '../../../assets/icon3.webp'
import item4 from '../../../assets/icon4.webp'

const ExtraSection2 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center my-32">
            <div className="mb-4 md:mr-6">
                <img src={image} alt="" className="w-full h-auto " />
            </div>
            <div className='w-full md:w-1/2 '>
                <p className="text-lg md:text-xl mb-2">We make you want to dance...right now</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">LEARN NUANCES FROM MASTERS</h2>
                <p className="text-sm md:text-base mb-4">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders gamification Effct. Branding funding incubator. Release user experience beta. Backing monetization paradigm shift client.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="flex items-center">
                        <img src={item1} alt="" className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
                        <div className="ml-4">
                            <p className="text-base font-bold">Dance Modern</p>
                            <p className="text-sm md:text-base">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={item2} alt="" className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
                        <div className="ml-4">
                            <p className="text-base font-bold">Dance Salsa</p>
                            <p className="text-sm md:text-base">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={item3} alt="" className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
                        <div className="ml-4">
                            <p className="text-base font-bold">Dance Hip Hop</p>
                            <p className="text-sm md:text-base">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={item4} alt="" className="w-12 h-12 md:w-16 md:h-16 animate-bounce" />
                        <div className="ml-4">
                            <p className="text-base font-bold">Dance Classical</p>
                            <p className="text-sm md:text-base">Canvas metri essar. Incubator ramen viral product management drect mailing. such founders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;