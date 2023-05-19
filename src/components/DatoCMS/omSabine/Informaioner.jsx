import Anchor from "../../Anchor";


function Informaioner({ content }) {
  return (
    <section className="bg-grey-dark text-offWhite px-5 py-16">
      <div className=" grid lg:flex lg:justify-evenly  max-w-[1450px] mx-auto gap-8 justify-items-center content-center items-center ">
        <article className=" grid gap-6">
          <h2 className="text-gold-light text-5xl font-extralight">{content[3].heading}</h2>
          <h3 className="text-gold-light text-4xl font-tangier ">{content[3].subHeading}</h3>

          <p className="max-w-xl mb-4">{content[3].paragraph}</p>

          <Anchor className="bg-gold-dark text-offWhite rounded-full px-4 w-max flex items-center justify-center py-2" href={content[3].knap[0].url}>
            {content[3].knap[0].text}
          </Anchor>
        </article>

        <div className="max-lg:w-full max-lg:max-w-xl grid gap-8">
          <div>
            <h4 className="text-gold-light text-xl">{content[3].aabningstiderHeading}</h4>
            <p>{content[3].tider}</p>
          </div>
          <div>
            <h4 className="text-gold-light text-xl">{content[3].lokationHeading}</h4>
            <p>{content[3].lokation}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informaioner;
