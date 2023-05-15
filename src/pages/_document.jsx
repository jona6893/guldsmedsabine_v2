import { Html, Head, Main, NextScript } from "next/document";

// Frontend
export default function Document() {
  return (
    <Html lang="da">
      <Head>
        {" "}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/zof2uyg.css"
        ></link>
        {/* <link href="https://fonts.cdnfonts.com/css/segoe-ui-4" rel="stylesheet"></link> */}
                {" "}
      </Head>
      <body className="bg-grey-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
