import { Html, Head, Main, NextScript } from "next/document";

// Frontend
export default function Document() {
  return (
    <Html lang="da">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/zof2uyg.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
        <meta
          name="description"
          content="Opdag unikke, håndlavede smykker fra Sabine Sørensen. 
          Jeg tilbyder skræddersyede designs, smykke reparationer og personlig service i Fredensborg. 
          Lad din passion for æstetik møde min ekspertise i smykkedesign og giv dine gamle smykker nyt liv. 
          Besøg mig og oplev en uforglemmelig smykkeoplevelse."
        ></meta>
        <meta
          name="keywords"
          content="Sabine Sørensen,
Unikke smykker,
Håndlavede smykker,
Smykkedesign,
Skræddersyede smykker,
Smykke reparation,
Fredensborg guldsmed,
Ædelsten,
Perlesmykker,
Kvalitetssmykker
"
        ></meta>
      </Head>
      <body className="bg-grey-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
