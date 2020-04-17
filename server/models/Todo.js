const Sequelize = require('sequelize')
const sequelize = require('../database/config')

const Todo = sequelize.define('todos',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: Sequelize.STRING(100),
    description: Sequelize.STRING(300),
    createdBy: {
      type: Sequelize.INTEGER(11),
      references: {
        model: 'users',
        key: 'id',
        as: 'createdBy',
      },
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

Todo.associate = (models) => {
  Todo.belongsTo(models.User, {
    as: 'users',
    foreignKey: 'userId',
  });
};

module.exports = Todo
