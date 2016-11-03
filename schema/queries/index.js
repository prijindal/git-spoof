import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
} from 'graphql';

// import async from 'async';

import sequelize from 'sequelize';

import {nodeField} from '../node/'
import {Repository} from '../types/repository';

console.dir(nodeField.resolve)

export const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This represents our base query',
  fields: () => ({
    node: nodeField,
    nodes: {
      type: new GraphQLList(nodeField.type),
      args: {
        ids: {
          type: new GraphQLList(nodeField.args.id.type)
        }
      },
      resolve: (root, {ids}) => {
        return new Promise(function(resolve, reject) {
          // async.eachSeries(ids, (id, callback) => {
          //   let responses = []
          //   nodeField.resolve(root, {id: id})
          //   .then(res => {
          //     responses.push(res)
          //     callback()
          //   }).catch(reject)
          // }, function() {
          //   resolve(res)
          // })
          nodeField.resolve(root, {id: ids[0]})
          .then(res => {
            resolve([res])
          })
          .catch(reject)
        });
      }
    },
    repository: {
      type: Repository,
      args:{
        owner: {
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve: (root, {owner, name}) => {
        return new Promise(function(resolve, reject) {
          root.db.models.repositoryOwner.findOne({
            where: {login: owner}
          }).then(owner => {
            owner.getRepositories({
              where: {name: name}
            })
            .then((res) => {
              resolve(res[0])
            })
            .catch(reject)
          })
          .catch(reject)
        })
      }
    },
    relay: {
      type: Query,
      resolve: (root) => {
        return root;
      }
    }
  })
})
