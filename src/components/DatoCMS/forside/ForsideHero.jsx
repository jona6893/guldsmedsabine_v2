export default function ForsideHero({ content }) {
  return (
    <section className="max-w-[1450px] mx-auto">
      <video muted autoPlay className="w-full">
        <source src={content.baggrundsvideo?.url} type="video/mp4" />
      </video>
    </section>
  );
}
