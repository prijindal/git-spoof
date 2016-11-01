const Sequelize = require('sequelize')

const Db = require('../db');

const RepositoryOwner = Db.define('repositoryOwner', {
  name: {
    type: Sequelize.STRING
  },
  login: {
    type: Sequelize.STRING
  }
})

module.exports = RepositoryOwner;
