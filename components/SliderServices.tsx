"use client";

import { serviceData } from "@/data";
import { Pagination, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

export default function SliderServices() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      modules={[Pagination, Mousewheel]}
      className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex px-6 py-8 h-auto md:h-[290px] rounded-lg bg-transparent sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-gray-200 transition-all duration-300 border-2 border-transparent hover:border-red-300">
            <div className="mb-4 text-4xl text-red-400">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-slate-600 mb-4 text-lg">
                {item.title}
              </h3>
              <p className="text-zinc-600 text-sm">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
