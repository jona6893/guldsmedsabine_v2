import { GraphQLClient } from "graphql-request";
import { smykkerQuery } from "../modules/smykkerQuery";
import Galleri from "../components/DatoCMS/smykker/Galleri";
import Hero from "../components/DatoCMS/smykker/Hero";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Smykker({ data }) {
  const { main, products, footer } = data;
  const produkter = products;
  //console.log(produkter);

  return (
    <>
      <Head>
        <title>Smykker | Galleri</title>
      </Head>
      <main>
        <section className="flex items-center justify-center pt-12">
          <Hero />
        </section>
        <div className="text-lg flex flex-col gap-8 justify-center items-center py-20 bg-grey-dark">
          <Galleri produkter={produkter} />
        </div>
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

  const graphQLData = await graphQLClient.request(smykkerQuery);
  //console.log(graphQLData);
  return {
    props: { data: graphQLData },
  };
}
