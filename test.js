const { graphql, buildSchema } = require('graphql');
const schema = require('./schema')

let query = `
query {
  repositoryOwner(owner: "prijindal") {
    name
    ...on User {
      login
    }
  }
}
`

graphql(schema, query, {}).then((response) => {
  if (response.data) {
    console.log(JSON.stringify(response.data, 0, 1))
  } else {
    console.error(response.errors)
  }
})
