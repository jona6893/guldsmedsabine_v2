import { GraphQLClient } from "graphql-request";
import { kontaktQuery } from "../Modules/kontaktQuery";
import Kontakt from "../components/DatoCMS/kontakt/Kontakt";

// Frontend
export default function KontaktPage({ data }) {
  //console.log(data);

  return (
    <div>
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          case "KontaktRecord":
            return <Kontakt content={content} />;
        }
      })}
    </div>
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

  const graphQLData = await graphQLClient.request(kontaktQuery);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}
