export default function KontaktInformation({ content }) {
  const { overskrift, adresse, telefon, email, cvr, kort } = content;

  return (
    <section className="grid lg:grid-cols-2 max-w-[1450px] mx-auto">
      <div>
        <iframe
          width="100%"
          height="600"
          src={"https://maps.google.com/maps?q=" + kort.latitude + "," + kort.longitude + "&t=&z=19&ie=UTF8&iwloc=&output=embed"}
        ></iframe>
      </div>
      <div className="p-12 lg:p-16 flex flex-col justify-center">
        <h1 className="text-offWhite uppercase text-4xl mb-8 font-semibold">{overskrift}</h1>
        <address className="text-transform not-italic text-gold-light text-lg grid gap-y-8">
          <p>{adresse}</p>
          <p>{telefon}</p>
          <p>{email}</p>
          <p>{cvr}</p>
        </address>
      </div>
    </section>
  );
}
