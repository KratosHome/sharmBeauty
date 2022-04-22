import "./Slider.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Pagination, Autoplay, Navigation} from "swiper";
import {useEffect, useLayoutEffect, useState} from "react";
import ProductServer from "../../../API/ProductServer";
import {ProductList} from "../ProductList/ProductList";
import {useWindowSize} from "../../../hooks/useWindowSize";


export const Slider: React.FC<{}> = () => {
    const [getProduct, setGetProduct] = useState<any[]>([]);
    async function fetchProducts() {
        const getProduct = await ProductServer.ProductPage();
        setGetProduct(getProduct);
    }
    useEffect(() => {
        fetchProducts();
    }, []);


    const [width, height] = useWindowSize();
    let responsive
    function counInstagramSlider() {
        responsive = 5
        if (+width <= 730) {
            responsive = 1
        } else if (+width <= 1024) {
            responsive = 3
        } else if (+width <= 1571) {
            responsive = 4
        } else if (+width <= 2025) {
            responsive = 5
        } else if (+width <= 3020) {
            responsive = 6
        }
        return responsive;
    }

    return (
        <div className="swiper-container">
            <Swiper
                slidesPerView={counInstagramSlider()}
                spaceBetween={30}
                slidesPerGroup={1}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"

            >
                {getProduct.map(prod => (
                    <SwiperSlide key={prod.name}>
                        <ProductList key={prod.name} product={prod}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
