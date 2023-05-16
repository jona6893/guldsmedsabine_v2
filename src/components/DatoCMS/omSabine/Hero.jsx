

function Hero({ content }) {
  return (
    <section
      style={{ backgroundImage: `url("${content[0].heroImage.url}")` }}
      className="h-screen sm:bg-cover max-sm:bg-right bg-center">
      <div className="grid md:grid-cols-2 content-center p-4 h-full bg-black/50 max-w-[1450px] mx-auto">
        <div className="sm:p-8 inset-0">
          <h1 className="text-gold-light font-tangier">{content[0].title}</h1>
          <p className="text-offWhite">{content[0].paragraph}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
