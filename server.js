const Express = require('express');
const GraphHTTP = require('express-graphql');

import db from './db';
const Schema = require('./schema')

const app = Express();

const APP_PORT = process.env.PORT || 3000;

app.use('/graphql', GraphHTTP({
  schema: Schema,
  rootValue: {db},
  pretty: true,
  graphiql: true
}));


app.listen(APP_PORT, () => {
  console.log('We are up!!')
})
