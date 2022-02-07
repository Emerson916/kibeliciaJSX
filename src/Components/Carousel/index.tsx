import Carousel from "react-elastic-carousel";
import "./styles.scss"

export function Carrosel() {

    const breakPoints = [
        { width: 1000, itemsToShow: 1 },
        { width: 2000, itemsToShow: 2 },
        { width: 3000, itemsToShow: 3 },
        { width: 4000, itemsToShow: 4 },
    ];

    return (
        <div className="CarroselStyle">
            <Carousel isRTL breakPoints={breakPoints} >
                <div className="item">item 1</div>
                <div className="item">item 2</div>
                <div className="item">item 3</div>
                <div className="item">item 4</div>
            </Carousel>
        </div>

    );
}