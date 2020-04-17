const Sequelize = require('sequelize');
const sequelize = require('../database/config')

const User = sequelize.define(
  'users',
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(35),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(35),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

User.associate = (models) => {
  User.hasMany(models.Todo, {
    as: 'todos',
    foreignKey: 'userId',
  });
};

module.exports = User;
