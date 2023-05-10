import Heading from "../Heading";
import Markdown from "markdown-to-jsx";
import React from "react";
import Anchor from "../Anchor";

// Frontend
export default function SimpleText({ title, level, description }) {
  return (
    <section className="p-4">
   
      <Heading level={level}>{title}</Heading>
      {/*  hvad foregår der her præcis? */}
      <Markdown // Markdown komponentet er en npm module, hvis formål er at lave markdown om til JSX elementer. med Markdown har Sabine mulighed for at style tekster uden at hun selv skal lave noget med koden, og der er også mulighed for at indsætte links inde i paragrafer med Markdown. fordelen med Markdown er, at det kan være vilkårligt, hvornår der kommer et link inde i selve teksten, eller om der overhovedet skal være et link - det samme gør sig gældende for fed og kursiv tekst. på den måde behøver vi eksempelvis ikke at definere en a tag inde i en p tag, da det ikke er sikkert at der skal være det
        options={{ // denne objekt giver os mulighed for at tilpasse elementerne som returneres, når det kompilerer markdown til JSX
          forceBlock: true, // forceBlock er en option, der fortæller kompileren, at der kan laves linjeskift i teksten, og at hele teksten ikke nødventigvis skal være på samme linje
          overrides: { // overrides fortæller kompileren, at vi gerne vil tilpasse specifikke elementer, som returneres
            a: { // her vælger vi og tilpasser a tagget
              component: Anchor, // vi erstatter den standarde a tag, som returneres, med vores eget Anchor komponent i stedet for, så det er <Anchor></Anchor> og ikke <a></a>
              props: { // props svarer til attributter i html tags, vi sætter på elementet, for eksempel href, alt, className, title
                className: "text-blue-900", // her sætter vi en className attribut med værdien "text-blue-900" på elementet, sådan så elementet er <Anchor className="text-blue-900"><Anchor>
              },
            },
          },
        }}
      >
        {description}
      </Markdown>
    </section>
  );
}
