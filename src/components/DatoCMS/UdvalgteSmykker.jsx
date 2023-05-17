import Anchor from "../Anchor";

function UdvalgteSmykker({ content }) {
  console.log(content.UdvalgteSmykker);
  return (
    <section className="py-16 max-w-[1450px] mx-auto grid gap-12">
      <h2 className="text-gold-light text-4xl font-light  text-center">{content.overskriften}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {content.udvalgteSmykker.map((udvalgtSmykke, index) => (
          <div key={index} className={index % 2 === 1 ? "mt-16" : ""}>
            <img src={udvalgtSmykke.produktBillede[0].url} alt="" className="w-64 h-80 object-cover" />
            <article className="flex justify-between text-offWhite text-sm mt-2">
              <p>{udvalgtSmykke.produktNavn}</p>
              <p>{udvalgtSmykke.pris + " kr"}</p>
            </article>
          </div>
        ))}
      </div>
      <Anchor className="bg-gold-dark text-offWhite w-max mx-auto rounded-full px-4 flex items-center justify-center py-1.5 " href={content.knap[0].url}>
        {content.knap[0].text}
      </Anchor>
    </section>
  );
}

export default UdvalgteSmykker;
