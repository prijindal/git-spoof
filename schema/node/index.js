import {
  nodeDefinitions,
  fromGlobalId
} from 'graphql-relay'

import db from '../../db/'
import RepositoryModel from '../../db/models/repository';
import {Repository} from '../types/repository';

export const {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    type = type[0].toLowerCase() + type.substr(1);
    return db.models[type].findById(id)
  },
  (obj) => {
    if (obj.Model == RepositoryModel) {
      return Repository;
    }
  }
);
