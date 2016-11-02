import {
  GraphQLUnionType,
  GraphQLInterfaceType
} from 'graphql';

import {User} from './user';

export const RepositoryOwner = new GraphQLUnionType({
  name: 'RepositoryOwner',
  types: [ User ],
  resolveType(value) {
    return User
  }
})
