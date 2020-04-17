module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('todos', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING(100),
    description: DataTypes.STRING(300),
    createdBy: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'users',
        key: 'id',
        as: 'createdBy',
      },
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Todo.associate = models => {
    Todo.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'createdBy',
    });
  }
  return Todo
}
