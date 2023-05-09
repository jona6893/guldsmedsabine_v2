import { gql, GraphQLClient } from "graphql-request";

// Frontend
export default function Contact({ data }) {
  //console.log(data);

  return (
    <div>
      <h1>Hello {data.name}</h1>
    </div>
  );
}

// GraphQL Query
const page = "Kontakt";
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
  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const graphQLData = await graphQLClient.request(query);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}
