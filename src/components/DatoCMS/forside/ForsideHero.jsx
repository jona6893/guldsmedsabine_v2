import Image from "next/image";

export default function ForsideHero({ content }) {
  console.log(content)
  return (
    <section className="max-w-[1450px] mx-auto">
      <video muted autoPlay loop className="w-full max-md:hidden">
        <source src={content.baggrundsvideo?.url} type="video/mp4" />
      </video>
         <Image
        className="col-start-1 row-span-1 object-cover h-full aspect-square md:hidden"
        width={content.mobileBaggrund?.width}
        height={content.mobileBaggrund?.height}
        src={content.mobileBaggrund?.url}
        alt={content.mobileBaggrund?.alt}
        priority={true}
      />
    </section>
  );
}
