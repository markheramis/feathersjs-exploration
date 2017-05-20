const NeDB = require('nedb'); // @depricated
const path = require('path'); // @depricated
module.exports = function (app) {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'users.db'),
    autoload: true
  });
  Model.ensureIndex({ fieldName: 'email', unique: true });

  return Model;
};
