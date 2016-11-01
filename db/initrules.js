const Repository = require('./models/repository');
const RepositoryOwner = require('./models/repository-owner');
// Define Hasone, hasMany rules

Repository.belongsTo(RepositoryOwner)
RepositoryOwner.hasMany(Repository)
