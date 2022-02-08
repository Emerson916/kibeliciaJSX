import Carousel from "react-elastic-carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.scss"

export function Carrosel() {
    return(
        <Swiper className="mySwiper">
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Palmeiras não tem mundial</SwiperSlide>
            
        </Swiper>
    );
}

    // const breakPoints = [
    //     { width: 1000, itemsToShow: 1 },
    //     { width: 2000, itemsToShow: 2 },
    //     { width: 3000, itemsToShow: 3 },
    //     { width: 4000, itemsToShow: 4 },
    // ];

    // return (
    //     <div className="CarroselStyle">
    //         <Carousel isRTL breakPoints={breakPoints} >
    //             <div className="item">item 1</div>
    //             <div className="item">item 2</div>
    //             <div className="item">item 3</div>
    //         </Carousel>
    //     </div>

    // );

