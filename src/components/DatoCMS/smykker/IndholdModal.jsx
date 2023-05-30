import React from "react";
import ImageModal from "./ImageModal";
import Anchor from "../../Anchor";

function IndholdModal({ produktInfo }) {
  return (
    <div className="grid text-offWhite sm:grid-cols-2 box-border max-h-screen popupMobile" onClick={(e) => e.stopPropagation()}>
      <div className="p-8 flex flex-col justify-between max-sm:order-2 overflow-y-auto">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl text-gold-light">{produktInfo.produktNavn}</h3>
            <p className="">{produktInfo.produktBeskrivelse} </p>
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <p>
              <span className="text-stone-400 text-sm">Materiale: </span>
              {[
                produktInfo.materiale.map((materiale) => {
                  return materiale.materiale;
                }),
              ]
                .flat()
                .join(", ")}
            </p>
            <p>
              <span className="text-stone-400 text-sm">kategori: </span>
              {produktInfo.kategori.kategori}
            </p>
            <p>
              <span className="text-stone-400 text-sm">Pris: </span>
              {produktInfo.pris},-
            </p>
          </div>
        </div>
        <Anchor className="button-primary normal-case mx-auto" href="/kontakt">
          Kontakt Mig
        </Anchor>
      </div>
      <div className="flex items-center justify-center overflow-hidden">
        <ImageModal images={produktInfo.produktBillede} />
        {/* <img
          className="w-full h-auto aspect-[3/4] sm:rounded-r-md max-sm:rounded-b-md object-cover "
          src={produktInfo.produktBillede[0].url}
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default IndholdModal;

/* style={{ backgroundImage: `url(${produktInfo.produktFoto[0].url})` }}
        className="bg-cover bg-center max-h-[80vh] w-auto" */
