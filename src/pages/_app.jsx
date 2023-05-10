import Layout from "../layouts/Layout";
import "../styles/globals.css";
import { GraphQLClient, gql } from "graphql-request";
import App from "next/app";

// Frontend
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
