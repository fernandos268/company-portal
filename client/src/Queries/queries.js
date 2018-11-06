import { gql } from "apollo-boost";

const allUsers = gql`
  {
    allUsers {
      id
      firstName
      lastName
      email
      createdAt
      updatedAt
      isActive
    }
  }
`;

export { allUsers };
