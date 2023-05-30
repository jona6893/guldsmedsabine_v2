import { gql } from "graphql-request";

//* Import af Inhold til siden "Smykker"
export const smykkerQuery = gql`
  query {
    main: allPages(filter: { name: { eq: "Smykker" } }) {
      id
      name
      content {
        ... on ProduktPopUpRecord {
          __typename
          id
          tekst
          knap
        }
      }
    }
    products: allProdukters {
      ... on ProdukterRecord {
        id
        pris
        produktNavn
        produktBillede {
          url
          width
          height
          alt
        }
        produktBeskrivelse
        kategori {
          kategori
        }
        materiale {
          materiale
        }
      }
    }
    footer: allPages(filter: { name: { eq: "Footer" } }) {
      id
      name
      content {
        ... on FooterIndholdRecord {
          __typename
          logo {
            url
          }
          adresse
          telefonNummer
          email
          cvr
          socialMedie {
            icon {
              url
            }
            title
            link
          }
          undersider {
            overskrift
            link {
              titleLink
              link
            }
          }
        }
      }
    }
  }
`;
