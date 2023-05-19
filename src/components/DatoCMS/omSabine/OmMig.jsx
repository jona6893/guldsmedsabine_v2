function OmMig({ content }) {
  return (
    <section className="bg-grey-light text-offWhite  py-16">
      <div className="max-w-[1450px] mx-auto grid md:grid-cols-2 max-m:grid-rows-2 h-full">
        <div className="flex flex-col md:gap-16 max-md:gap-4 md:p-16 justify-around">
          <div className="flex flex-col gap-4 max-md:p-8">
            <h3 className="font-thin text-5xl text-gold-light">
              {content[1].title}
            </h3>
            <p className="text-lg">{content[1].paragraph}</p>
          </div>
          <div
            className="md:hidden w-full h-full bg-cover bg-center max-md:min-h-[500px]"
            style={{ backgroundImage: `url("${content[1].sabinephoto.url}")` }}
          ></div>
          <div className="flex flex-col gap-4 max-md:p-8">
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
          className="max-md:hidden p-16 w-full h-full bg-cover bg-center max-md:min-h-[400px]"
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
