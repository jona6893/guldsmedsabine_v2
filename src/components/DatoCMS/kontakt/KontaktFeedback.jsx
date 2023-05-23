import Anchor from "../../Anchor";

export default function KontaktFeedback({ content }) {
  const { overskrift, tekst } = content;
  return (
    <section className="max-w-[1450px] mx-auto bg-no-repeat bg-cover bg-center h-screen" style={{ backgroundImage: `url("/images/sabineLogoBackgroundTwo.svg")` }}>
      <article className=" text-center p-8 lg:p-12   flex flex-col justify-center items-center ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.987 178.987" className="w-24 md:w-32 mb-8 md:mb-12 text-gold-light">
          <path d="M4.5,46.582,37.566,79.648l49.6-74.4" transform="translate(43.669 47.052)" fill="none" stroke="#af9075" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <g fill="none" stroke="#af9075" strokeWidth="4">
            <circle cx="89.493" cy="89.493" r="89.493" stroke="none" />
            <circle cx="89.493" cy="89.493" r="86.993" fill="none" />
          </g>
        </svg>

        <h1 className="uppercase text-gold-light text-2xl md:text-4xl font-light mb-4">{overskrift}</h1>
        <p className="text-lg text-offWhite">{tekst}</p>
        <Anchor href="/" className="button-primary w-max rounded-full mt-8 md:mt-12">
          Tilbage til hjemmesiden
        </Anchor>
      </article>
    </section>
  );
}
