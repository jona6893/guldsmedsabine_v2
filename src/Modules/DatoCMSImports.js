//* Import af Inhold til siden "Forside"


//
//
//
//* Import af Inhold til siden "Smykker"


//
//
//
//* Import af Inhold til siden "Om Sabine"

//
//
//
//* Import af Inhold til siden "Ydelser"

//
//
//
//* Import af Inhold til siden "Om Sabine"
export const omSabineInhold = `  query {
    allPages(filter: { name: { eq: "Om Sabine" } }) {
      id
      name
      content {
        ... on OmSabineHeroRecord {
          id
          title
          paragraph
          heroImage {
            url
          }
        }
        ... on MinHistorieRecord {
          id
          title
          title2
          paragraph
          paragraph2
          knap {
            text
            url
          }
          sabinephoto {
            url
          }
        }
      }
    }
  }`;
//
//
//
//* Import af Inhold til siden "Kontakt"
