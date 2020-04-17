'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('todo', {
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
          model: 'users', // user hasMany posts n:n
          key: 'id',
          as: 'userId',
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('todo');
  },
};
