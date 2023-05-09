import Layout from "../layouts/Layout";
import "../styles/globals.css";
import { GraphQLClient, gql } from "graphql-request";
import App from "next/app";

// Frontend
export default function MyApp({ Component, pageProps, navData }) {
  return (
    <Layout navData={navData}>
      <Component {...pageProps} />
    </Layout>
  );
}

// GraphQL Query
const query = gql`
  query {
    allNavItems {
      index
      menuItem {
        id
        name
        slug
      }
    }
  }
`;

// GET Request
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const endpoint = "https://graphql.datocms.com/";
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const navData = await graphQLClient.request(query);
  const filteredNavData = navData.allNavItems;
  //console.log(filteredNavData);
  return { ...appProps, navData: filteredNavData };
};
