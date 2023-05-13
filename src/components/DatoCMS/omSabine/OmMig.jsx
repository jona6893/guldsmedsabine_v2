function OmMig({ content }) {
  return (
    <section className="bg-grey-light text-offWhite max-h-[80vh] min-h-[600px] py-16">
      <div className="max-w-[1450px] mx-auto grid md:grid-cols-2 h-full">
        <div className="flex flex-col gap-32 p-16 justify-around">
          <div className="flex flex-col gap-4">
            <h3 className="font-thin text-5xl text-gold-light">
              {content[1].title}
            </h3>
            <p className="text-lg">{content[1].paragraph}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-thin text-5xl text-gold-light">
              {content[1].title2}
            </h3>
            <p className="text-lg">{content[1].paragraph2}</p>
          </div>
          <div className="flex flex-col justify-end items-center">
            <a
              className="bg-gold-dark border-gold-dark border hover:bg-transparent hover:text-gold-light hover:border-gold-light py-2 p-8 text-offWhite rounded-full"
              href={content[1].knap[0].url}
            >
              {content[1].knap[0].text}
            </a>
          </div>
        </div>
        <div
          className=" p-16 w-full h-full bg-cover bg-center "
          style={{ backgroundImage: `url("${content[1].sabinephoto.url}")` }}
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
