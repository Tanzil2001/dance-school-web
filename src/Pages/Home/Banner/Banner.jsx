
import { useRef } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';

import banner4 from '../../../assets/banner-1jpg.jpg' ;
// import banner1 from '../../../assets/banner-1jpg.png' ;
import banner2 from '../../../assets/banner-2jpg.png' ;
import banner3 from '../../../assets/cover-3jpg.png' ;
import banner5 from '../../../assets/banner5jpg.jpg' ;
import banner6 from '../../../assets/banner-6jpg.jpg' ;
import banner7 from '../../../assets/banner-7jpg.jpg' ;

const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper  "
            >
                {/* <SwiperSlide><img src={banner1} alt="" /></SwiperSlide> */}
                <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner6} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner7} alt="" /></SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        {/* <circle cx="24" cy="24" r="20"></circle> */}
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;