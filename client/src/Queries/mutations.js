import { gql } from "apollo-boost";

const loginMutation = gql`
  mutation($email: String!, $password: String!, $rememberMe: Boolean!) {
    login(email: $email, password: $password, rememberMe: $rememberMe) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

const registrationMutation = gql`
  mutation(
    $firstName: String!
    $lastName: String!
    $email: String!
    $username: String!
    $password: String!
    $role: String!
    $isActive: Boolean!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      username: $username
      password: $password
      role: $role
      isActive: $isActive
    ) {
      ok
      user {
        id
        email
        username
      }
      errors {
        path
        message
      }
    }
  }
`;

export { loginMutation, registrationMutation };
