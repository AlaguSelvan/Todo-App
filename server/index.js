const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression');
require('dotenv')

const app = express()
const UserRoutes = require('./routes/User');
const TodoRoutes = require('./routes/Todo')
const PORT = process.env.PORT || 3002;

// DB Connections
const db = require('./database/config')

app.use(bodyParser.json())
app.use(cors())
app.use(compression);

app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/todo', TodoRoutes);


app.listen(PORT, () => {
  console.log(chalk.blue(`server running on port ${PORT}`));
});
