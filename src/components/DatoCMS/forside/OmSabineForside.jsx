import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Anchor from "../../Anchor";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function OmSabineForside({ content }) {
  return (
    <section className="mx-auto max-w-[1450px] grid gap-4  md:grid-cols-2 justify-items-center items-center pb-16 md:px-4 ">
      <div className="max-md:hidden xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:aspect-square h-[500px]">
        <img className="col-start-1 row-span-1 object-cover h-full aspect-square max-xl:hidden" src={content.fotos[1].url} alt="" />
        <img className="col-start-2 row-span-2 col-span-2 object-cover h-full " src={content.fotos[0].url} alt="" />
        <img className="col-start-1 row-span-1 object-cover h-full aspect-square max-xl:hidden" src={content.fotos[2].url} alt="" />
      </div>
      <div className="md:hidden w-screen  order-1">
        <Swiper spaceBetween={50} slidesPerView={1} modules={[Navigation, Pagination]} loop={true} navigation pagination={{ clickable: true }}>
          <SwiperSlide>
            {/* <div
              style={{ backgroundImage: `url("${content.fotos[2].url}")` }}
              className="h-full bg-cover bg-center"
            ></div> */}
            <img className="w-full h-96  object-cover " src={content.fotos[0].url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-96 object-cover " src={content.fotos[1].url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full h-96 object-cover " src={content.fotos[2].url} alt="" />
          </SwiperSlide>
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
      </div>

      <article className="px-4 ">
        <h1 className="text-gold-light text-8xl font-tangier mb-4">{content.overskrift}</h1>
        <h3 className="text-gold-light uppercase text-2xl font-light mb-4">{content.underOverskrift}</h3>
        <p className="mb-8 text-offWhite max-w-lg">{content.paragraph}</p>
        <div className="grid max-sm:justify-items-center">
          <Anchor className="bg-gold-dark text-offWhite rounded-full px-4  w-max  flex items-center justify-center py-1.5" href={content.knap[0].url}>
            {content.knap[0].text}
          </Anchor>
        </div>
      </article>
    </section>
  );
}

export default OmSabineForside;
