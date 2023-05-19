function Ydelser({ content }) {
  return (
    <>
      {content.ydelser.map((ydelse, index) => {
        return (
          <section className=" bg-grey-dark grid justify-items-center">
            <div className=" grid sm:grid-cols-2 max-w-[1450px] mx-auto">
              <div className="flex flex-col  justify-center items-center">
                <article className="max-w-lg p-4 ">
                  <h2 className="text-gold-light text-4xl mb-4 font-light uppercase">{ydelse.title}</h2>
                  <p className="text-offWhite mb-4">{ydelse.paragraph}</p>
                  <p className="text-gold-light text-2xl font-light">{ydelse.price}</p>
                </article>
              </div>

              <img className={`w-[726px] h-[500px] object-cover  ${index % 2 == 0 ? "order-first" : ""}`} src={ydelse.photo.url} alt="" />
            </div>
          </section>
        );
      })}
    </>
  );
}
export default Ydelser;
