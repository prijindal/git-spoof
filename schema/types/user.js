const {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType
} = require('graphql');

const User = new GraphQLObjectType({
  name: 'User',
  fields: () => {
    const {Repository} = require('./repository');
    return {
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
    }
  }
})

exports.User = User
