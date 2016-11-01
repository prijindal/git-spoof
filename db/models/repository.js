const Sequelize = require('sequelize')

const Db = require('../db');

const Repository = Db.define('repository', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Repository;
