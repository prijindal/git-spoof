import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} from 'graphql';

import db from '../../db';

import {Repository} from '../types/repository';
import {RepositoryOwner} from '../types/repository-owner';

export const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This represents our base query',
  fields: () => ({
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
  })
})
