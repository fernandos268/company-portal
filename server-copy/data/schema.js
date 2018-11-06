"use strict";

const { gql } = require("apollo-server-express");
const _ = require("lodash");
const resolvers = require("./resolvers");

module.exports.typeDefs = gql`
  scalar DateTime

  type User {
    id: Int!
    firstName: String!
    lastName: String
    email: String!
    username: String!
    posts: [Post]
    isLoggedIn: Boolean!
    isActive: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Post {
    id: Int!
    title: String!
    slug: String!
    content: String!
    status: Boolean!
    user: User!
    tags: [Tag!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Tag {
    id: Int!
    name: String!
    slug: String!
    description: String!
    posts: [Post]
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type Query {
    allUsers: [User]
    fetchUser(id: Int!): User
    getProfile: User
    allPosts: [Post]
    fetchPost(id: Int!): Post
    allTags: [Tag]
    fetchTag(id: Int!): Tag
  }
  type Mutation {
    login(email: String!, password: String!): String

    createUser(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
      isLoggedIn: Boolean!
      isActive: Boolean!
    ): User

    updateUser(
      id: Int!
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
      isActive: Boolean!
    ): User

    updateUserPassword(id: Int!, password: String!): User

    updateUserStatus(id: Int!, isActive: Boolean!): User

    addPost(
      title: String!
      content: String!
      status: Boolean
      tags: [Int!]!
    ): Post

    updatePost(
      id: Int!
      title: String!
      content: String!
      status: Boolean
      tags: [Int!]!
    ): Post

    deletePost(id: Int!): Boolean

    addTag(name: String!, description: String): Tag

    updateTag(id: Int!, name: String!, description: String): Tag

    deleteTag(id: Int!): Boolean
  }
`;

module.exports.resolvers = _.merge(resolvers);
