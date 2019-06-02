const express = require('express');
const connectDB = require('./config/db');
const gravatar = require('gravatar');
const app = express();

//Connect To DB
connectDB();

//Init Middlware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Running');
});

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  console.log(`Server Port ${PORT}`);
});
