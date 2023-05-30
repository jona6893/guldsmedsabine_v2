function Hero({ content }) {
  return (
    <section className="relative h-[70vh]">
      <div style={{ backgroundImage: `url("${content.heroImage.url}")` }} className="absolute h-full w-full bg-cover bg-center brightness-50" />
      <div className="relative grid h-full items-center max-w-[1450px] mx-auto">
        <div className="px-4 ">
          <h1 className="text-gold-light font-italianno">{content.title}</h1>
          <p className="text-offWhite max-w-xl">{content.paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
