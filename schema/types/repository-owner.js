const {
  GraphQLUnionType
} = require('graphql');

const {User} = require('./user');

const RepositoryOwner = new GraphQLUnionType({
  name: 'RepositoryOwner',
  types: [ User ],
  resolveType(value) {
    return User
  }
})

exports.RepositoryOwner = RepositoryOwner
