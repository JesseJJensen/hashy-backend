require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9000;
const passport = require('passport');

const users = require('./routes/api/users');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());
// Importing passport file into server
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/users', users);
app.use('/wallets', require('./controllers/walletsController'))

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});