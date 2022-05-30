import { gql } from "@apollo/client";

export default gql`
  query GetStores {
    dbo_store {
      description
      id
      name
    }
  }
`;
