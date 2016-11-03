import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

import {
  globalIdField
} from 'graphql-relay'

import {nodeInterface} from '../node/'

import {RepositoryOwner} from './repository-owner';

export const Repository = new GraphQLObjectType({
  name: 'Repository',
  interfaces: () => {
    return [nodeInterface]
  },
  fields: () => ({
    id: globalIdField('Repository'),
    name: {
      type: GraphQLString
    },
    owner: {
      type: RepositoryOwner,
      resolve: (repository) => {
        return repository.getRepositoryOwner()
      }
    }
  })
})
