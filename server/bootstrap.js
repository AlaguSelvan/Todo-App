module.exports = async() => {
  const Todo = require('./models/Todo');
  const User = require('./models/User');
  // User.hasMany(Todo, {
  //   as: "todo", foreignKey: 'userId'
  //  });
  // Todo.belongsTo(User, {
  //   as: "user", foreignKey: "userId"
  // })
  const errorHandler = (err) => console.error("error:", err)
  const user = await User.create({ username: "alex", password: "123456" }).catch(errorHandler);
  const todo = await Todo.create({ title: "First Todo", description: "First Description", userId: user.id }).catch(errorHandler);
  const users = await User.findAll({ where: { username: 'alex'}, include: [ { model: Todo, as: "todo" } ]}).catch(errorHandler);
  console.log('Alex first Todo', users);
}