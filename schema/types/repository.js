const {
  GraphQLString,
  GraphQLObjectType
} = require('graphql');

const {RepositoryOwner} = require('./repository-owner');

const Repository = new GraphQLObjectType({
  name: 'Repository',
  fields: () => {
    return {
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
    }
  }
})

exports.Repository = Repository
