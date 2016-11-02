import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
  } from 'graphql';

import {RepositoryOwner} from './repository-owner';
import {Repository} from './repository';

export const User = new GraphQLObjectType({
  name: 'User',
  interfaces: [RepositoryOwner],
  isTypeOf: () => {
    return true
  },
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    login: {
      type: GraphQLString
    },
    repositories: {
      type: new GraphQLList(Repository),
      resolve(user) {
        return user.getRepositories();
      }
    }
  })
})
