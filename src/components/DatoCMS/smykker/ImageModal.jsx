import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function ImageModal({ images }) {
  return (
    <>
      <Swiper
        className="h-full"
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        /*    onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)} */
      >
        {images.map((image) => (
          <SwiperSlide>
            <Image
              width={image.width}
              height={image.height}
              alt={image.alt}
              className="w-full h-full aspect-[2/3] sm:rounded-r-md max-sm:rounded-b-md object-cover"
              src={image.url}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`.swiper-button-next, .swiper-button-prev{
    color: white;
}
.swiper-pagination-bullet{
  background-color: white !important;
}
`}
      </style>
    </>
  );
}

export default ImageModal;
