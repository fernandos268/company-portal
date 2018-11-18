import { gql } from "apollo-boost";

const allUsers = gql`
  {
    allUsers {
      id
      firstName
      lastName
      username
      email
      role
      isActive
      createdAt
      updatedAt
    }
  }
`;

export { allUsers };
