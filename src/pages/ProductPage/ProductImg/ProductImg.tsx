import "./ProductImg.css"
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import {EffectCube, Pagination} from "swiper";

interface ProductImgType {
    img: any
}

export const ProductImg: React.FC<ProductImgType> = ({img}) => {

    return (
        <div className="productImg">
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 5,
                    shadowScale: 0.74,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                {img.map((item: any) => (
                    <SwiperSlide key={item}>
                        <img src={item}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};