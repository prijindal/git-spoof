import {
  GraphQLUnionType,
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';

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
