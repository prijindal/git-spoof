const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');
const db = require('./db/');

const {Query} = require('./schema/queries/');

const Schema = new GraphQLSchema({
  query: Query
});

module.exports = Schema
