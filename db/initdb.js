const Db = require('./db');

require('./initrules');

const Repository = require('./models/repository');
const RepositoryOwner = require('./models/repository-owner');

Db.sync({force: true})
.then(() => {
  RepositoryOwner.create({
    name: 'Priyanshu Jindal',
    login: 'prijindal'
  }).then(repositoryOwner => {
    Repository.create({
      name: 'readGit'
    })
    .then(repository => {
      repositoryOwner.setRepositories([repository])
    })
  })
})
