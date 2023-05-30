import { GraphQLClient } from "graphql-request";
import { forsideQuery } from "../modules/forsideQuery";
import ForsideHero from "../components/DatoCMS/forside/ForsideHero";
import Event from "../components/DatoCMS/forside/Event";
import OmSabineForside from "../components/DatoCMS/forside/OmSabineForside";
import FindMigHer from "../components/DatoCMS/forside/FindMigHer";
import UdvalgteYdelser from "../components/DatoCMS/forside/UdvalgteYdelser";
import UdvalgteSmykker from "../components/DatoCMS/forside/UdvalgteSmykker";
import Parallax from "../components/DatoCMS/forside/Parallax";
import Footer from "../components/Footer";
import Head from "next/head";

// Frontend
export default function HomePage({ data }) {
  //console.log(data);
  const { main, footer } = data;
  const event = main[0].content[2];

  return (
    <>
      <Head>
        <title>Guldsmed Sabine - Håndlavet Smykker</title>
        <meta
          name="description"
          content="Opdag unikke, håndlavede smykker fra Sabine Sørensen. 
          Jeg tilbyder skræddersyede designs, smykke reparationer og personlig service i Fredensborg. 
          Lad din passion for æstetik møde min ekspertise i smykkedesign og giv dine gamle smykker nyt liv. 
          Besøg mig og oplev en uforglemmelig smykkeoplevelse."
        ></meta>
      </Head>
      <main>
        {/* <h1>Hello {data.name}</h1> */}
        {main[0].content.map((content) => {
          // render content on the page
          switch (content.__typename) {
            case "ForsideHeroRecord":
              return <ForsideHero content={content} key={content.id} />;
            /* case "OmSabineForsideRecord":
              return <OmSabineForside content={content} key={content.id} />; */
            case "EventRecord":
              return <Event content={content} key={content.id} />;
            case "FindMigHerRecord":
              return <FindMigHer content={content} key={content.id} />;
            case "UdvalgteYdelserRecord":
              return <UdvalgteYdelser content={content} key={content.id} />;
            case "UdvalgteSmykkerRecord":
              return <UdvalgteSmykker content={content} key={content.id} />;
            case "ParallaxRecord":
              return <Parallax content={content} key={content.id} />;
          }
        })}
      </main>
      <Footer content={footer[0].content[0]} />
    </>
  );
}

// GET Request
export async function getStaticProps() {
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData = await graphQLClient.request(forsideQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}
