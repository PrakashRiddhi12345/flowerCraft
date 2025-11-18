import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import imge1 from "../assets/slider/BANNER_1.webp";

export default function HomeSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6 rounded-lg overflow-hidden shadow-lg">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <img src={imge1} className="w-full h-64 object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={imge1} className="w-full h-64 object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={imge1} className="w-full h-64 object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
