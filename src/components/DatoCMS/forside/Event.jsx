import Anchor from "../../Anchor";

function Event({ content }) {
  return (
    <section className="mx-auto max-w-[1450px] grid md:grid-cols-2 justify-items-center items-center pb-16   ">
      <div className=" flex flex-col gap-10  p-4">
        <article className="">
          <h2 className="text-gold-light text-4xl font-light mb-4">{content.title}</h2>

          <p className="text-offWhite max-w-lg mb-4">{content.paragraph}</p>
          <h4 className="text-offWhite font-tangier text-4xl">{content.smallTitle}</h4>
        </article>
        <article className="grid gap-2">
          <h3 className="text-gold-light text-2xl font-light"> {content.titleTwo}</h3>
          <p className="flex gap-2 text-offWhite">
            {content.titleDate} <span className="text-gold-light">{content.date}</span>
          </p>
          <p className="flex gap-4 text-offWhite">
            {content.titleTid} <span className="text-gold-light">{content.time}</span>
          </p>
          <p className="flex gap-2 text-offWhite">
            {content.titleLocation} <span className="text-gold-light">{content.location}</span>
          </p>
        </article>
        <div className="flex max-sm:flex-col md:flex-col min-[915px]:flex-row gap-y-8 justify-between">
          <Anchor className="bg-gold-dark text-offWhite rounded-full px-4 flex items-center justify-center py-1.5" href={content.knapOne[0].url}>
            {content.knapOne[0].text}
          </Anchor>
          <Anchor
            className="text-gold-light border-gold-dark border-2 rounded-full px-4 flex items-center justify-center py-1.5"
            href={content.knapTwo[0].url}
          >
            {content.knapTwo[0].text}
          </Anchor>
        </div>
      </div>
      <img src={content.photo.url} alt="" className="w-full max-md:h-[500px] h-full lg:h-[650px] object-cover max-md:order-first" />
    </section>
  );
}

export default Event;
