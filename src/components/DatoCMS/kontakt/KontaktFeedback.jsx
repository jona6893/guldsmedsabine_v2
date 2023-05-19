import Anchor from "../../Anchor";

export default function KontaktFeedback({ content }) {
  const { overskrift, tekst } = content;
  return (
    <div className="text-center p-8 lg:p-12 min-h-[60vh] flex flex-col justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 178.987 178.987" className="w-24 md:w-32 mb-8 md:mb-12 text-gold-light">
        <path
          d="M4.5,46.582,37.566,79.648l49.6-74.4"
          transform="translate(43.669 47.052)"
          fill="none"
          stroke="#af9075"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <g fill="none" stroke="#af9075" strokeWidth="4">
          <circle cx="89.493" cy="89.493" r="89.493" stroke="none" />
          <circle cx="89.493" cy="89.493" r="86.993" fill="none" />
        </g>
      </svg>

      <h1 className="uppercase text-gold-light text-2xl md:text-4xl font-light mb-4">{overskrift}</h1>
      <p className="text-lg text-offWhite">{tekst}</p>
      <Anchor
        href="/"
        className="block bg-gold-dark px-8 py-2 uppercase w-max rounded-full text-offWhite hover:bg-gold-light transition-colors mx-auto mt-8 md:mt-12"
      >
        Tilbage til hjemmesiden
      </Anchor>
    </div>
  );
}
