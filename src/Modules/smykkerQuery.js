import { gql } from "graphql-request";

//* Import af Inhold til siden "Smykker"
export const smykkerQuery = gql`
    query {
    allPages(filter: { name: { eq: "Smykker" } }) {
      id
      name
    }
    allProdukters {
      ... on ProdukterRecord {
        id
        materiale
        pris
        produktNavn
        produktBillede {
          url
        }
        produktBeskrivelse
        kategori
      }
    }
  }
`;
