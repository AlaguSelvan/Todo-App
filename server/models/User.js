const Sequelize = require('sequelize');
const sequelize = require('../database/config')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(35),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  User.associate = function(models) {
    User.hasMany(models.Todo, {
      onDelete: 'cascade'
    });
  };
  return User
}

