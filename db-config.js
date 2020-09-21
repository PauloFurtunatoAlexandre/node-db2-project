const knex = require("knex");

const knexConfig = require("./knexfile.js");

const configureKnex = knex(knexConfig.development);

module.exports = configureKnex;
