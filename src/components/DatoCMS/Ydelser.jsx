import { useEffect } from "react";
import ScrollOut from "scroll-out";

function Ydelser({ content }) {
  useEffect(() => {
    console.clear();

    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true,
        scrollPercentY: true,
      },
      threshold: 0.2,
    });
  }, []);

  return (
    <>
      {content.ydelser.map((ydelse, index) => {
        return (
          <div className="scrollHalf">
            <div className="scrollHalf__grupo" data-scroll>
              <div className="scrollHalf__grupo__imagen">
                <img src={ydelse.photo.url} alt="Image 1" />
              </div>
              <div className="scrollHalf__grupo__contenido">
                <h1>{ydelse.title}</h1>
                <p className="text-offWhite mb-4">{ydelse.paragraph}</p>
                <p className="text-gold-light text-2xl font-light">{ydelse.price}</p>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>
        {`
          .scrollHalf {
            position: relative;
          }
          /*.scrollHalf__grupo { opacity: calc(1/(1+(var(--visible-y)*var(--visible-y)*var(--visible-y)*var(--visible-y)))); transition: all 200ms ease-in-out;}*/

          .scrollHalf__grupo {
            transition: all 200ms ease-in-out;
          }
          .scrollHalf__grupo__imagen {
            overflow: hidden;
          }
          .scrollHalf__grupo__contenido {
            padding: 3rem;
          }

          .scrollHalf__grupo[data-scroll="out"] {
            opacity: 0;
          }
          .scrollHalf__grupo[data-scroll="in"] {
            opacity: calc(var(--visible-y) * 1.9);
          }

          @media screen and (min-width: 900px) {
            .scrollHalf__grupo {
              min-height: 100vh;
            }
            .scrollHalf__grupo__imagen {
              position: fixed;
              top: 0;
              left: 0;
              width: 50vw;
            }
            .scrollHalf__grupo__imagen img {
              min-height: 80vh;
              min-width: 50vw;
            }
            .scrollHalf__grupo__contenido {
              margin: 0 3vw 0 52vw;
            }
          }
        `}
      </style>
    </>
  );
}

export default Ydelser;
