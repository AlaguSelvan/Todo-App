import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import chalk from 'chalk';
import compression from 'compression'
import passport from 'passport'
require('dotenv').config()

const app = express()

import UserRoutes from './routes/User'
import TodoRoutes from './routes/Todo'

const PORT = process.env.PORT || 3002;
import models from './models';

// Database
const db = require('./database/config');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

app.use(bodyParser.json())
app.use(cors())

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/todo', TodoRoutes);

app.use(compression);
app.use(passport.initialize());
require('./config/passport')(passport);


models.sequelize.sync({}).then(() => {
app.listen(PORT, () => {
  console.log(chalk.blue(`server running on port ${PORT}`));
});
});
