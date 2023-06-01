import Image from "next/image";
import Anchor from "../../Anchor";
import { useEffect, useRef, useState } from "react";

export default function ForsideHero({ content }) {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // lazy loading the video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.load();
          }
        });
      },
      { threshold: 0.25 }
    );
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // serving content based on screen size
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 640);
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  useEffect(() => {
    const videoContainer = videoContainerRef.current;

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // checks if the window width is at least 768px
        if (!videoContainer.firstChild) {
          // checks if the video isn't already loaded
          const video = document.createElement("video");
          video.setAttribute("muted", "");
          video.setAttribute("autoplay", "");
          video.setAttribute("loop", "");
          video.classList.add(
            "absolute",
            "top-0",
            "left-0",
            "w-full",
            "h-full",
            "object-cover",
            "z-0"
          );

          const source = document.createElement("source");
          source.setAttribute("src", content.baggrundsvideo?.url);
          source.setAttribute("type", "video/mp4");

          video.appendChild(source);
          videoContainer.appendChild(video);
        }
      } else {
        if (videoContainer.firstChild) {
          // checks if the video is loaded
          videoContainer.removeChild(videoContainer.firstChild); // removes the video
        }
      }
    };
    handleResize(); // calls the function immediately to handle the current viewport size
    window.addEventListener("resize", handleResize); // listens to the resize event to handl
       return () => window.removeEventListener('resize', handleResize); // cleans up the listener when the component unmounts
  }, [content.baggrundsvideo]);



  //console.log(content);
  return (
    <section className="mx-auto">
      {!isMobile ? (
        <div className="grid relative h-[80vh]">
          <div className="bg-black/25 col-start-1 row-start-1 z-[1]">
            <div className=" text-offWhite flex flex-col justify-center p-4 gap-4 max-w-[1450px] mx-auto w-full h-full">
              <h1 className="text-gold-light font-italianno mb-2 text-9xl">
                {content.overskrift}
              </h1>
              <h2 className="text-gold-light uppercase font-light mb-2 ">
                {content.subOverskrift}
              </h2>
              <p className="mb-8 text-offWhite max-w-lg">{content.brDtekst}</p>
              <Anchor className="button-primary" href={content.knap[0].url}>
                {content.knap[0].text}
              </Anchor>
            </div>
          </div>
          <div
            ref={videoContainerRef}
            className="absolute top-0 left-0 w-full h-full z-0"
          ></div>
        </div>
      ) : (
        <div className="grid  h-[70vh]">
          <div className="bg-black/50 col-start-1 row-start-1 text-offWhite z-[1] flex flex-col justify-center p-4 gap-4">
            <h1 className="text-gold-light font-italianno mb-4">
              {content.overskrift}
            </h1>
            <h2 className="text-gold-light uppercase font-light mb-4 text-2xl">
              {content.subOverskrift}
            </h2>
            <p className="mb-8 text-offWhite max-w-lg">{content.brDtekst}</p>
            <Anchor className="button-primary" href={content.knap[0].url}>
              {content.knap[0].text}
            </Anchor>
          </div>
          <Image
            className="col-start-1 row-span-1 object-cover h-full col-start-1 row-start-1 aspect-square "
            width={content.mobileBaggrund?.width}
            height={content.mobileBaggrund?.height}
            src={content.mobileBaggrund?.url}
            alt={content.mobileBaggrund?.alt}
            priority={true}
          />
        </div>
      )}
    </section>
  );
}
