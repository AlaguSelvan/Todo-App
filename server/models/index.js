const Sequelize = require('sequelize');

const sequelize = new Sequelize('todoapp', 'root', 'password', {
  host: '127.0.0.1',
  dialect: 'mysql',
  // operatorsAliases: false,
  dialectOptions: {
    // useUTC: false, //for reading from database
    // dateStrings: true,
    // typeCast: true,
    timezone: '+05:30',
  },
  timezone: '+05:30', //for writing to database
  // operatorsAliases: false
});

const models = {
  User: require('./User')(sequelize, Sequelize),
  Todo: require('./Todo')(sequelize, Sequelize),
};


models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models