const knex = require('knex');
console.log(process.env.DATABASE_URL);
const pg = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  debug: false,
  acquireConnectionTimeout: 3000
});
module.exports = pg;