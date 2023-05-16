function Informaioner({ content }) {
  return (
    <section className="bg-grey-dark text-offWhite py-16 ">
      <div className="px-16 grid md:grid-cols-2 max-md:gap-16 max-w-[1450px] mx-auto gap-4 justify-items-end">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-gold-light text-5xl">{content[3].heading}</h2>
            <h3 className="text-gold-light text-4xl font-tangier">{content[3].subHeading}</h3>
          </div>
          <p>{content[3].paragraph}</p>
          <a
            className="w-fit bg-gold-dark border-gold-dark border hover:bg-transparent hover:text-gold-light hover:border-gold-light py-2 p-8 text-offWhite rounded-full"
            href={content[3].knap[0].url}
          >
            {content[3].knap[0].text}
          </a>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-gold-light text-xl">
              {content[3].aabningstiderHeading}
            </h4>
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
