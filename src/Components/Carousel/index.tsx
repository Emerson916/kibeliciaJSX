import Carousel from "react-elastic-carousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.scss"
import promocao_slide from "../../assets/Carousel/promocao.svg";
import promocao_hamburguer from "../../assets/Carousel/promocao.jpeg";


export function Carrosel() {
    return (
        <Swiper className="mySwiper">
            <SwiperSlide>
                <img src={promocao_slide} alt="combo hambuguer" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={promocao_hamburguer} alt="combo hambuguer" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={promocao_slide} alt="combo hambuguer" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={promocao_slide} alt="combo hambuguer" />
            </SwiperSlide>

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

