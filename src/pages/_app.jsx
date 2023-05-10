import Layout from "../layouts/Layout";
import "../styles/globals.css";

// Frontend
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
