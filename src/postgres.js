module.exports = function () {
  const app = this;
  const config = app.get('postgres');
  const db = require('knex')(config);
  app.set('knexClient', db);
};
