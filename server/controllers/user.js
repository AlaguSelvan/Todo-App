const jwt = require('jsonwebtoken');
import Models from '../models'

const { User } = Models

export const Login = async(req, res) => {
  const { name, password } = req.body;
  if(!password || !name) {
    return res.status(422).send({ errors: [{ title: 'Data missing', detail: 'Provide name and password' }]})
  }
  const data = await User.findAll({
    attributes: ['id', 'username'],
    where: {
      username: name,
    },
  }).map((el) => el.get({ plain: true }));
  // return res.send(data);
  // return User.findAll({
  //   attributes: ['id', 'username'],
  //   where: {
  //     username: name
  //   }
  // }).then(d => res.send(d))
  if (data.length > 0) {
    const payload = {
      id: data[0].id
    }
    console.log(payload);
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600,
      },
      (err, token) => {
        if (err) {
          return res.status(422).send({
            errors: [
              { title: 'Auth Error', detail: 'Please login later' },
            ]
          })
        }
        return res.send({
          success: true,
          token: 'Bearer ' + token,
        });
      }
    );
  } else {
    return res.status(400).send({errors: [{ title: 'Not Found', detail: 'User not Found'}]})
  }
}

export const Register = async(req, res) => {
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
    where: {
      username: name,
    }
  });
    if (existingUser.length > 0) {
    return res
      .status(422)
      .send({
        errors: [
          { title: 'Data Exists', detail: 'User already registered' },
        ],
      });
    }
  try {
    await User.create({
      username: name,
      password: password,
    });
      return res.json({ registered: true });
  } catch (error) {
    return res.status(400).send({
      errors: [{ title: 'error occured', detail: 'Please Check inputs' }],
    });
  }
}
