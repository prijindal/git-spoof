import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
  } from 'graphql';

import {RepositoryOwner} from './repository-owner';

export const User = new GraphQLObjectType({
  name: 'User',
  interfaces: [RepositoryOwner],
  isTypeOf: () => {
    return RepositoryOwner
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
    }
  })
})
