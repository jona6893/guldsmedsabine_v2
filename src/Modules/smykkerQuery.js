import { gql } from "graphql-request";

//* Import af Inhold til siden "Smykker"
export const smykkerQuery = gql`
  query {
    allPages(filter: { name: { eq: "Smykker" } }) {
      id
      name
      content {
        ... on SmykkerGalleriRecord {
          id
          produkter {
            accessory
            beskrivelse
            id
            kategori
            materiale
            pris
            produktFoto {
              url
            }
            produktNavn
          }
        }
      }
    }
  }
`;
