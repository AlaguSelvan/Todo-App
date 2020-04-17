const Sequelize = require('sequelize')

const Todo = sequelize.define('todo', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING(100),
  description: Sequelize.STRING(300),
  userId: {
    type: Sequelize.INTEGER(11),
    references: {
      model: 'users',
      key: 'id'
    },
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
});

module.exports = Todo;
