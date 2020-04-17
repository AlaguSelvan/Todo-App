const User = require('../models/User')


const Login = async(req, res) => {
  const { name, password } = req.body;
  if(!password || !name) {
    return res.status(422).send({ errors: [{ title: 'Data missing', detail: 'Provide name and password' }]})
  }
  const existingUser = await User.findAll({
    username: name
  })
  if(existingUser) {
    return res.status(200).send({ loggedIn: true })
  }
  return res.status(400).send({errors: [{ title: 'User not Found', detail: 'User not registered'}]})
}

const Register = async() => {
  const { name, password } = req.body;
  if (!password || !name) {
    return res
      .status(422)
      .send({
        errors: [
          { title: 'Data missing', detail: 'Provide name and password' },
        ],
      });
  }
  const existingUser = await User.findAll({
    username: name,
  });
    if (existingUser) {
    return res
      .status(422)
      .send({
        errors: [
          { title: 'Data Exists', detail: 'User already registered' },
        ],
      });
    }
  try {
    const user = await User.create({
      username: 'alex',
      password: '123456',
    });
    if(user) {
      return res.json({ registered: true });
    }
  } catch (error) {
    return res.status(400).send({
      errors: [{ title: 'error occured', detail: 'Please Check inputs' }],
    });
  }
}

module.exports = {
  Login,
  Register
}