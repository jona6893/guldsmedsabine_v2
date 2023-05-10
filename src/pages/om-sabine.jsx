import { GraphQLClient } from "graphql-request";
import { omSabineQuery } from "../modules/omSabineQuery";
export default function omSabine({ data }) {
  const { content } = data;
  console.log(content);
  return (
    <div>
      <section
        style={{ backgroundImage: `url("${content[0].heroImage.url}")` }}
        className="w-screen h-screen sm:bg-cover max-sm:bg-right"
      >
        <div className="grid sm:grid-cols-2 content-center p-4 h-full bg-black/50">
          <div className="sm:p-8 inset-0">
            <h1 className="text-gold-light font-tangier">{content[0].title}</h1>
            <p className="text-offWhite">{content[0].paragraph}</p>
          </div>
        </div>
      </section>
      <section className="bg-grey-light text-offWhite grid sm:grid-cols-2 h-screen">
        <div className="flex flex-col gap-8 p-8 justify-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl text-gold-light">{content[1].title}</h3>
            <p>{content[1].paragraph}</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl text-gold-light">{content[1].title2}</h3>
            <p>{content[1].paragraph2}</p>
          </div>
          <a href={content[1].knap[0].url}>{content[1].knap[0].text}</a>
        </div>
        <div className="grid grid-cols-1 p-8 w-full h-full">
          <div className="bg-gold-dark/40 col-start-1 row-start-1 z-10"></div>
          <img
            className="col-start-1 row-start-1 z-0 w-full h-full"
            src={content[1].sabinephoto.url}
            alt=""
          />
        </div>
      </section>
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

  const graphQLData = await graphQLClient.request(omSabineQuery);
  const filteredGraphQLData = graphQLData.allPages[0];
  //console.log(filteredGraphQLData);
  return {
    props: { data: filteredGraphQLData },
  };
}
