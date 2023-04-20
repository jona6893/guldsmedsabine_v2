import { gql, GraphQLClient } from "graphql-request";
import { GraphQLResponse } from "graphql-request/build/esm/types";
import { Page } from "../_app";

// Types
interface ContactProps {
  data: Data;
}

interface Data {
  id: number;
  name: string;
}

// Frontend
export default function Contact({ data }: ContactProps) {
  console.log(data);

  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  );
}

// GraphQL Query
const page: Page = "Kontakt";
const query = gql`
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
export async function getStaticProps() {
  const endpoint: string = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData: GraphQLResponse | any = await graphQLClient.request(query);
  const filteredGraphQLData = graphQLData.allPages[0];
  console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}
