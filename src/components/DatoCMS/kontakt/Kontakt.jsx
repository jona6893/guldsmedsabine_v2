import KontaktFormular from "./KontaktFormular";

export default function Kontakt({ content }) {
  const { overskrift, paragraf, billede, formular } = content;

  return (
    <section className="grid lg:grid-cols-2 max-w-[1450px] mx-auto">
      <div className="p-16">
        <h1 className="text-gold-light uppercase text-4xl font-light mb-2">{overskrift}</h1>
        <p className="text-offWhite text-lg">{paragraf}</p>
        <KontaktFormular formular={formular[0]} />
      </div>
      <div style={{ backgroundImage: `url("${billede?.url}")` }} className="hidden lg:block bg-cover h-screen bg-[66%]" role="img" />
    </section>
  );
}
