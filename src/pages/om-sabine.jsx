import { gql, GraphQLClient } from "graphql-request";

export default function omSabine({data}) {
    const {content} = data;
    console.log(data);
  return (
    <div>
      <section>
        <h1>{content[0].title}</h1>
        <p>{content[0].paragraph}</p>
        <img src={content[0].heroImage.url} alt="" />
      </section>
      <section>
        <h3>{content[1].title}</h3>
        <p>{content[1].paragraph}</p>
        <h3>{content[1].title2}</h3>
        <p>{content[1].paragraph2}</p>
        <a href={content[1].knap[0].url}>{content[1].knap[0].text}</a>
        <img src={content[1].sabinephoto.url} alt="" />
      </section>
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
          heroImage {
            url
          }
        }
        ... on MinHistorieRecord {
          id
          title
          title2
          paragraph
          paragraph2
          knap {
            text
            url
          }
          sabinephoto {
            url
          }
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
