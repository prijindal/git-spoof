const Express = require('express');
const GraphHTTP = require('express-graphql');

const Schema = require('./schema')

const app = Express();

const APP_PORT = 3000;

app.use('/graphql', GraphHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}));


app.listen(APP_PORT, () => {
  console.log('We are up!!')
})
