import "./MayBanner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img from "../../../img/baner/baner_main/baner1.jpg";
import img1 from "../../../img/baner/baner_main/baner2.jpg";
import img2 from "../../../img/baner/baner_main/baner3.jpg";
import img4 from "../../../img/baner/baner_main/baner5.jpg";
import img5 from "../../../img/baner/baner_main/baner6.jpg";
import { MayButton } from "../MayButton/MayButton";
import { Link } from "react-router-dom";

const image = [
  { url: img5, path: "/product" },
  { url: img4, path: "" },
  { url: img2, path: "/product" },
  { url: img, path: "/product" },
  { url: img1, path: "/product" },
];

export const MayBanner: React.SFC<{}> = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
      >
        {image.map((im) => (
          <SwiperSlide key={Math.random()}>
            {im.path.length > 1 ? (
              <div className="bntslider">
                <Link to={im.path}>
                  <MayButton>Перейти</MayButton>
                </Link>
              </div>
            ) : null}
            <img src={im.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
