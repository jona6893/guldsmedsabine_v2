import Anchor from "../../Anchor";

function OmMig({ content }) {
  return (
    <section className="bg-grey-light text-offWhite ">
      <div className="max-w-[1450px] mx-auto grid md:grid-cols-2 max-m:grid-rows-2 h-full">
        <div className="flex flex-col  justify-around">
          <div className=" px-5 py-16 grid justify-items-center">
            <article>
              <h2 className="font-thin text-5xl text-gold-light mb-4">{content.title}</h2>
              <p className="max-w-xl text-base">{content.paragraph}</p>
            </article>
          </div>

          <div
            className="md:hidden w-full h-full bg-cover bg-center max-md:min-h-[500px]"
            style={{ backgroundImage: `url("${content.sabinephoto.url}")` }}
          ></div>

          <div className="px-5 max-md:py-16 md:pb-16 grid gap-8 justify-items-center">
            <article>
              <h3 className="font-thin text-4xl text-gold-light mb-4">{content.title2}</h3>
              <p className="max-w-xl text-base">{content.paragraph2}</p>
            </article>

            <div className="w-full max-w-xl">
              <Anchor className="button-primary" href={content.knap[0].url}>
                {content.knap[0].text}
              </Anchor>
            </div>
          </div>
        </div>
        <div
          className="max-md:hidden w-full h-full bg-cover bg-center max-md:min-h-[400px]"
          style={{ backgroundImage: `url("${content.sabinephoto.url}")` }}
        >
          {/* <div
            style={{ backgroundImage: `url("${content[1].sabinephoto.url}")` }}
            className="bg-gold-dark/40 col-start-1 row-start-1 z-10 bg-cover aspect-[1/1.4]"
          ></div> */}
        </div>
      </div>
    </section>
  );
}

export default OmMig;
