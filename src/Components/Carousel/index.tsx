import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "./styles.scss"
import "swiper/css/navigation";
import promocao_slide from "../../assets/Carousel/promocao.svg";
import promocao_hamburguer from "../../assets/Carousel/promocao.jpeg";

export function Carrosel() {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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

// import Carousel from "react-elastic-carousel";

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

