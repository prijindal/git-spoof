const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} = require('graphql');

const db = require('../../db');

const {Repository} = require('../types/repository');
const {RepositoryOwner} = require('../types/repository-owner');

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This represents our base query',
  fields:() => {
    return {
      repository: {
        type: Repository,
        args:{
          owner: {
            type: new GraphQLNonNull(GraphQLString)
          },
          reponame: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, {owner, reponame}) => {
          return db.models.repository.find({where: {name: reponame}})
        }
      },
      repositoryOwner: {
        type: RepositoryOwner,
        args: {
          owner: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, {owner}) => {
          return db.models.repositoryOwner.find({where: {login: owner}})
        }
      },
      query: {
        type: Query,
        resolve: (root) => {
          return root;
        }
      }
    }
  }
})

exports.Query = Query
