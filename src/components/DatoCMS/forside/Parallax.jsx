import React from 'react'

function Parallax({content}) {
    console.log("hej");
  return (
    <section class="pt-64 pb-40 relative mx-auto  grid justify-items-center">
      <div class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${content.fotoParallax.url})` }}></div>
      {/*  <p class="text-orange-100 display-2 text-center pl-4 relative text-4xl px-2 sm:px-none max-w-md md:max-w-xl leading-relaxed">
        We create <span class="italic font-semibold">beautiful</span> and <span class="font-bold">meaningful</span> spaces with <span class="italic font-semibold">your style</span> and <span class="font-bold">personality</span> in mind.
      </p> */}
    </section>
  );
}

export default Parallax