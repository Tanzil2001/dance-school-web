import React from 'react';
import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./ExtraSliderSection.css";

import slideImage1 from '../../../assets/image-caption.jpg';
import slideImage2 from '../../../assets/image-caption1.jpg';
import slideImage3 from '../../../assets/image-caption2.jpg';
import slideImage4 from '../../../assets/image-caption3.jpg';
import slideImage5 from '../../../assets/image-caption4.jpg';

const ExtraSliderSection = () => {
    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                    <img src={slideImage1}/>
                    <p>ok</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage5}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage1}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slideImage5}/>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
};

export default ExtraSliderSection;