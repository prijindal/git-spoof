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
import {nodeField} from './schema/node/';
import {Repository} from './schema/types/repository';
import {RepositoryOwner} from './schema/types/repository-owner';

const Schema = new GraphQLSchema({
  types:[User, Repository, RepositoryOwner, nodeField],
  query: Query
});

module.exports = Schema
