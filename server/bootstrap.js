const runData = async() => {
  const User = require('./models/User');
  const Todo = require('./models/Todo');
  // User.hasMany(Todo, {
  //   as: 'todo',
  //   foreignKey: 'userId',
  // });
  const errorHandler = (err) => console.error("error:", err)
  const user = await User.create({
    username: 'alex',
    password: '123456',
  }).catch(errorHandler);
  console.log({user})
  const todo = await Todo.create({
    title: 'First Todo',
    description: 'First Description',
    createdBy: user.id
  }).catch(errorHandler);
  const users = await User.findAll({ where: { username: 'alex'}, include: [ { model: Todo, as: "todo" } ]}).catch(errorHandler);
  console.log('Alex first Todo', users);
}

runData();

// module.exports = runData;