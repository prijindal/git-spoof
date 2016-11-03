const { graphql, buildSchema } = require('graphql');
const schema = require('./schema')

import db from './db';

let query = `
query {
  nodes(ids: ["UmVwb3NpdG9yeTox"]) {
    id
    ...on Repository {
      name
    }
  }
  repository(owner: "prijindal", name: "readGit") {
    id
    name
  }
}
`

graphql(schema, query, {db}).then((response) => {
  if (!response.errors) {
    console.log(JSON.stringify(response.data, 0, 1))
  } else {
    console.error(response.errors)
  }
})
