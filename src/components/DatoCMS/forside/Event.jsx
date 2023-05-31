import Image from "next/image";
import Anchor from "../../Anchor";

function Event({ content }) {
  return (
    <section
      id="events"
      className="mx-auto max-w-[1450px] grid md:grid-cols-2 max-md:grid-row-2 justify-items-center items-center    "
    >
      <div className=" flex flex-col gap-10  px-4 py-8 max-md:row-start-2">
        <article className="">
          <h2 className="text-gold-light font-light mb-4 uppercase">
            {content.title}
          </h2>

          <p className="text-offWhite max-w-lg mb-4">{content.paragraph}</p>
          <h4 className="text-offWhite font-italianno text-5xl">
            {content.smallTitle}
          </h4>
        </article>
        <article className="grid gap-2">
          <h3 className="text-gold-light font-light"> {content.titleTwo}</h3>
          <p className="flex gap-2 text-offWhite">
            {content.titleDate}{" "}
            <span className="text-gold-light">{content.date}</span>
          </p>
          <p className="flex gap-4 text-offWhite">
            {content.titleTid}{" "}
            <span className="text-gold-light">{content.time}</span>
          </p>
          <p className="flex gap-2 text-offWhite">
            {content.titleLocation}{" "}
            <span className="text-gold-light">{content.location}</span>
          </p>
        </article>
        <div className="flex flex-row gap-x-4 gap-y-8 max-md:justify-center flex-wrap">
          {/* <Anchor
            className="button-primary"
            target="_blank"
            href={content.knapper[0]?.url}
          >
            {content.knapper[0]?.text}
          </Anchor> */}
          <Anchor
            className="button-primary"
            target="_blank"
            href={content.knapper[1]?.url}
          >
            {content.knapper[1]?.text}
          </Anchor>
        </div>
      </div>
      {/* <Image width={content.photo.width} height={content.photo.height} alt={content.photo.alt} loading="lazy" src={content.photo.url} className="w-full  h-fit  object-cover max-md:order-first" /> */}
      <div
        style={{ backgroundImage: `url("${content.photo.url}")` }}
        className="bg-cover bg-center w-full h-full max-md:h-[500px] max-md:row-start-1"
      ></div>
    </section>
  );
}

export default Event;
