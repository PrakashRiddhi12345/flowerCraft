import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Correct import path

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OfferSlider = () => {
  const offers = [
    "🎉 Diwali Mega Offer - 50% OFF on all Handicrafts!",
    "🌸 Flat 40% OFF on Flower Pots!",
    "🎁 Buy 2 Get 1 Free on Home Decor!",
    "🔥 Winter Sale - Up to 60% OFF!",
  ];

  return (
    <div className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white p-3 rounded-b-2xl shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination]} // ✅ Works directly here now
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <h2 className="text-center text-lg md:text-xl font-semibold tracking-wide">
              {offer}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferSlider;
