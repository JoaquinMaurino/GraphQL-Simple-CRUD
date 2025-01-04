//This file will define what will be the structure of your data

const { gql } = require("graphql-tag");

//Data types:
//String, Int, Float, Boolean, ID -> unique identifier
//Using ! => attribute required
const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    stock: Boolean!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(
      title: String!
      category: String!
      price: Float!
      stock: Boolean!
    ): Product

    deleteProduct(id: ID!): Product

    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      stock: Boolean
    ) : Product
  }
`;

module.exports = typeDefs;
