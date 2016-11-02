import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

import {Query} from './schema/queries/';

import {User} from './schema/types/user';
import {Repository} from './schema/types/repository';
import {RepositoryOwner} from './schema/types/repository-owner';

const Schema = new GraphQLSchema({
  types:[User, Repository, RepositoryOwner],
  query: Query
});

module.exports = Schema
