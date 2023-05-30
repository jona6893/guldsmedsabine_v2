import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Anchor from "../../Anchor";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function OmSabineForside({ content }) {
  return (
    <section
      className=" bg-no-repeat bg-str-tre sm:bg-str-to md:bg-str bg-position-et sm:bg-position-to md:bg-position-tre"
      style={{
        backgroundImage: `url("/images/gren.svg")`,
        backgroundPosition: "",
        backgroundSize: "",
      }}
    >
      <div className=" mx-auto max-w-[1450px] grid gap-4  md:grid-cols-2 justify-items-center items-center pb-16 md:px-4">
        <div className="max-md:hidden xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:gap-4 xl:aspect-square h-[500px]">
          <Image
            className="col-start-1 row-span-1 object-cover h-full w-full aspect-square max-xl:hidden"
            width={content.fotos[1].width}
            height={content.fotos[1].height}
            src={content.fotos[1].url}
            alt={content.fotos[1].alt}
            priority={true}
          />
          <Image
            className="col-start-2 row-span-2 col-span-2 object-cover h-full "
            width={content.fotos[0].width}
            height={content.fotos[0].height}
            src={content.fotos[0].url}
            alt={content.fotos[0].alt}
            priority={true}
          />
          <Image
            className="col-start-1 row-span-1 object-cover h-full aspect-square max-xl:hidden"
            width={content.fotos[2].width}
            height={content.fotos[2].height}
            src={content.fotos[2].url}
            alt={content.fotos[2].alt}
            priority={true}
          />
        </div>
        <div className="md:hidden w-screen  order-1">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              {/* <div
              style={{ backgroundImage: `url("${content.fotos[2].url}")` }}
              className="h-full bg-cover bg-center"
            ></div> */}
              <Image
                className="w-full h-96  object-cover"
                width={content.fotos[0].width}
                height={content.fotos[0].height}
                src={content.fotos[0].url}
                alt={content.fotos[0].alt}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-96  object-cover"
                width={content.fotos[1].width}
                height={content.fotos[1].height}
                src={content.fotos[1].url}
                alt={content.fotos[1].alt}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-96  object-cover"
                width={content.fotos[2].width}
                height={content.fotos[2].height}
                src={content.fotos[2].url}
                alt={content.fotos[2].alt}
                priority={true}
              />
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
          <h1 className="text-gold-light font-italianno mb-4">{content.overskrift}</h1>
          <h3 className="text-gold-light uppercase font-light mb-4">{content.underOverskrift}</h3>
          <p className="mb-8 text-offWhite max-w-lg">{content.paragraph}</p>
          <div className="grid max-sm:justify-items-center">
            <Anchor className="button-primary" href={content.knap[0].url}>
              {content.knap[0].text}
            </Anchor>
          </div>
        </article>
      </div>
    </section>
  );
}

export default OmSabineForside;
