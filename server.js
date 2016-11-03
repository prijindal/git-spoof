const Express = require('express');
const GraphHTTP = require('express-graphql');

import db from './db';
const Schema = require('./schema')

const app = Express();

const APP_PORT = 3000;

app.use('/graphql', GraphHTTP({
  schema: Schema,
  root: {db},
  pretty: true,
  graphiql: true
}));


app.listen(APP_PORT, () => {
  console.log('We are up!!')
})
