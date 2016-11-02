import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
  } from 'graphql';

import {Repository} from './repository';

export const User = new GraphQLObjectType({
  name: 'User',
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
      args: {
        first: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(user) {
        return user.getRepositories();
      }
    }
  })
})
