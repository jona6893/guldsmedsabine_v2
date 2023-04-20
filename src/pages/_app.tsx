import { NavData } from "@/components/Navigation";
import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import { GraphQLClient, gql } from "graphql-request";
import { GraphQLResponse } from "graphql-request/build/esm/types";
import type { AppProps } from "next/app";
import App from "next/app";

// Types
export type Page = "Forside" | "Kontakt";

interface MyAppProps extends AppProps {
  navData: NavData[];
}

// Frontend
export default function MyApp({ Component, pageProps, navData }: MyAppProps) {
  return (
    <Layout navData={navData}>
      <Component {...pageProps} />
    </Layout>
  );
}

// GraphQL Query
const query: string = gql`
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
MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext);

  const endpoint: string = "https://graphql.datocms.com/";
  const graphQLClient: GraphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
  });

  const navData: GraphQLResponse | any = await graphQLClient.request(query);
  const filteredNavData = navData.allNavItems;
  //console.log(filteredNavData);
  return { ...appProps, navData: filteredNavData };
};
