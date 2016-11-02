import {
  GraphQLString,
  GraphQLObjectType
} from 'graphql';

import {RepositoryOwner} from './repository-owner';

export const Repository = new GraphQLObjectType({
  name: 'Repository',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    owner: {
      type: RepositoryOwner,
      resolve: (repository) => {
        console.dir(repository.getRepositoryOwner)
        return repository.getRepositoryOwner()
      }
    }
  })
})
