"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { categoryDesc } from "./constants";
const Category = () => {
  const ItemImage = ({ src, alt }) => {
    return (
      <div className="relative group">
        <img src={src} alt={alt} className="rounded-lg" />
        <div className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity group-hover:opacity-80 flex items-center justify-center">
          <p className="text-white text-lg">Teks yang Muncul saat Hover</p>
        </div>
      </div>
    );
  };
  return (
    <div className="mt-10 h-fit mb-10">
      {/* Title */}
      <h1
        className="text-[30px] w-[205px] text-center mx-auto 
      leading-10"
      >
        Category
      </h1>
      <div className="w-full flex justify-center">
        <p className=" w-[250px] text-md mt-5 text-center">{categoryDesc}</p>
      </div>
      {/* Description */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper mt-5"
      >
        <SwiperSlide className="p-10 md:p-0">
          <ItemImage src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Gambar Alam 1" />
        </SwiperSlide>
        <SwiperSlide className="p-10 md:p-0">
          <ItemImage src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Gambar Alam 1" />
        </SwiperSlide>
        <SwiperSlide className="p-10 md:p-0">
          <ItemImage src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Gambar Alam 1" />
        </SwiperSlide>
        <SwiperSlide className="p-10 md:p-0">
          <ItemImage src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Gambar Alam 1" />
        </SwiperSlide>
        <SwiperSlide className="p-10 md:p-0">
          <ItemImage src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Gambar Alam 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
