

function Galleri({content}) {
    

  return (
    <section className="bg-grey-dark ">
      <div className="max-w-[1450px] mx-auto flex overflow-x-scroll scrollbar-hide gap-4 items-center justify-around px-4 py-16">
        {content[2].galleri.map((img, index) => (
          <img
            className={index % 2 == 0 ? "mb-16" : "mt-16"}
            src={img.url}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}



export default Galleri