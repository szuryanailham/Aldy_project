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
    <section id="Category" className="mt-10 h-fit mb-10">
      <div className="flex flex-col items-center">
        {/* Title */}
        <h1 className="w-[205px] style_title">Category</h1>

        <div className="w-full flex justify-center p-2">
          {/* Description */}
          <p className="w-[250px] md:w-[599px] text-md md:text-[22px] mt-5 md:mt-10 text-center  mx-auto font-light">{categoryDesc}</p>
        </div>
      </div>

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
        className="mySwiper md:w-[700px]  md:h-[500px] mt-5 "
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
    </section>
  );
};

export default Category;
