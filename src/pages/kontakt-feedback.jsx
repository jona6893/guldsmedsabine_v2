import { GraphQLClient } from "graphql-request";
import { kontaktFeedbackQuery } from "../modules/kontaktFeedbackQuery";
import KontaktFeedback from "../components/DatoCMS/kontakt/KontaktFeedback";

// Frontend
export default function KontaktPage({ data }) {
  //console.log(data);

  return (
    <main>
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          case "KontaktFeedbackRecord":
            return <KontaktFeedback content={content} />;
        }
      })}
    </main>
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

  const graphQLData = await graphQLClient.request(kontaktFeedbackQuery);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}
