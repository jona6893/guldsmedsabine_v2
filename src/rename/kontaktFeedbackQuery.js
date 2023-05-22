import { gql } from "graphql-request";

//* Import af Inhold til siden "Kontakt"
export const kontaktFeedbackQuery = gql`
  query {
    allPages(filter: { name: { eq: "Kontakt" } }) {
      id
      name
      content {
        ... on KontaktFeedbackRecord {
          __typename
          overskrift
          tekst
        }
      }
    }
  }
`;
