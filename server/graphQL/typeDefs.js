const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Account {
        _id: ID
        username: String
        password: String
        email: String
    }

    type Product {
        _id: ID
        description: String
        name: String
        ratings: Float
        images: String
    }

    type Orders {
        _id: ID

    }

    type Query {
        accounts: [Account]
        account(username: String): Account
        me: Account

        products: [Product]
        product(_id: ID): Product

    }
`;

module.exports = typeDefs;