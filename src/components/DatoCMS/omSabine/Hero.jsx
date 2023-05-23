function Hero({ content }) {
  return (
    <section style={{ backgroundImage: `url("${content.heroImage.url}")` }} className="h-[70vh] bg-cover  bg-center">
      <div className="grid  h-full  items-center  max-w-[1450px] mx-auto">
        <div className="px-4 ">
          <h1 className="text-gold-light font-tangier">{content.title}</h1>
          <p className="text-offWhite max-w-xl text-lg">{content.paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
