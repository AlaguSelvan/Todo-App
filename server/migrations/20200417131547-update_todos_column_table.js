'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('todos', 'userId', 'createdBy');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('todos', 'createdBy', 'userId');
    // return Promise.resolve();
  },
};
