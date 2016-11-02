import {
  GraphQLUnionType,
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

// import {User} from './user';

export const RepositoryOwner = new GraphQLInterfaceType({
  name: 'RepositoryOwner',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    }
  })
})
