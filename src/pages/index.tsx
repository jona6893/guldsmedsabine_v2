import { gql, GraphQLClient } from "graphql-request";
import { GraphQLResponse } from "graphql-request/build/esm/types";
import SimpleText from "@/components/DatoCMS/SimpleText";

// Types
interface HomeProps {
  data: Data;
}

interface Data {
  id: number;
  name: string;
  content: any[];
}

// Frontend
export default function Home({ data }: HomeProps) {
  //console.log(data);

  return (
    <div>
      <h1>Hello {data.name}</h1>
      {data.content.map((content) => {
        // render content on the page
        switch (content.__typename) {
          case "SimpleTextRecord":
            return <SimpleText key={content.title} title={content.title} level={1} description={content.description} />;
        }
      })}
    </div>
  );
}

// GraphQL Query
const page: string = "Forside";
const query: string = gql`
  query {
    allPages(filter: { name: { eq: ${page} } }) {
      id
      name
      content {
        ... on SimpleTextRecord {
          __typename
          title
          description
        }
      }
    }
  }
`;

// GET Request
export async function getStaticProps(): Promise<{ props: { data: any } }> {
  const endpoint: string = "https://graphql.datocms.com/";
  const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData: GraphQLResponse | any = await graphQLClient.request(query);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}
