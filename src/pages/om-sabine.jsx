import { gql, GraphQLClient } from "graphql-request";

export default function omSabine({data}) {
    const {content} = data;
    console.log(content[0]);
  return (
    <div>
      <h1>{content[0].title}</h1>
      <p>{content[0].paragraph}</p>
      <img src={content[0].heroImage.url} alt="" />
    </div>
  );
}

// GraphQL Query
const page = "Om Sabine";
const query = gql`
  query {
    allPages(filter: { name: { eq: "Om Sabine" } }) {
      id
      name
      content {
        ... on OmSabineHeroRecord {
          id
          title
          paragraph
          heroImage{url}
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
