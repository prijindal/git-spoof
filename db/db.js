const Sequelize = require('sequelize');

const Conn = new Sequelize('mucicplayer', 'prijindal', 'prijindal', {
  dialect: 'sqlite',

  storage: './database.sqlite'
})

module.exports = Conn;
