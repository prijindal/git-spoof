import {
  GraphQLUnionType,
  GraphQLInterfaceType
} from 'graphql';

import {User} from './user';

export const RepositoryOwner = new GraphQLInterfaceType({
  name: 'RepositoryOwner',
  types: [ User ],
  resolveType(value) {
    return User
  }
})
