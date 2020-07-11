import { gql } from "apollo-boost"

export const USER_QUERY = gql`
  {
    users {
      _id
      firstName
      lastName
    }
  }
`

export const REACT_QUERY = gql`
  {
    survey(survey: js) {
      survey
      tool(id: react) {
        experience {
          allYears {
            awarenessInterestSatisfaction {
              awareness
              interest
              satisfaction
            }
          }
        }
      }
    }
  }
`
export const FRAMEWORKS_QUERY = gql`
  {
    frameworks {
      _id
      stars
      symbol
      name
    }
  }
`
