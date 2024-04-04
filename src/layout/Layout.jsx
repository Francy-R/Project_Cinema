import { Outlet } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import CardCarousel from "../components/CardCarousel";
import { Pagination } from "swiper/modules";

const Layout = ({ movies = [] }) => {
  return (
    <div>
      <div className="h-[50vh]">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
        >
          {movies.map((elem, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <CardCarousel movieInfo={elem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
